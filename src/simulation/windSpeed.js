const random = require('random-number');
const stoch = require('stochastic')
const kmeans = require('node-kmeans');
const { Household } = require('../dbModels')

function updateClusters(households, mean, deviation, depth, nClusters = 2){
    if(depth == 6 || households.lentgh == 1){
        for(let i = 0; i < households.length; i++){
            Household.findByIdAndUpdate(households[i].id, {windSimulation: {mu: mean, sigma: deviation}})
        }
    }else{
        let positions = Array()
        for (let i = 0; i < households.length; i++) {
            positions[i] = [ households[i].coords.x , households[i].coords.y ];
        }
        const means = stoch.norm(mean, deviation, nClusters)
        const deviations = stoch.norm(mean/4, deviation/4, nClusters)
        kmeans.clusterize(positions, {k:nClusters}, function (error, results){
            if(results.clusterInd == undefined){
                console.log('Error while clustering in updateClusters(): ' + error)
            }else{
                for(let i = 0; i < results.length; i++){
                    let newHouseholds = Array()
                    for (let i = 0; i < results.clusterInd.length; i++){
                        newHouseholds[i] = households[clusterInd[i]]
                    }
                    updateClusters(newHouseholds, means[i], deviations[i], depth+1)
                }                
            }
        })
    }
}

module.exports = {
    getWindSpeed: async function (householdID){
        const household = await Household.findById(householdID)
        return stoch.norm(household.windSimulation.mu, household.windSimulation.sigma, 1)
    },

    updateWindParameters: async function (){
        const households = await Household.find()
        const mu = random({min: 10.0, max: 100.0})
        const sigma = random({min: 10.0, max: 100.0})
        updateClusters(households, mu, sigma, 0)
    }
}