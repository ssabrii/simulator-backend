var stoch = require('stochastic')
const { Household } = require('./dbModels')

function updateCluster(households, mean, deviation, depth){
    if(depth == X || households.lentgh == 1){

    }else{
        //apply k mean
        //For each cluster
        //  - generate mean and deviation
        //  - updateCluster(households, mean, deviation, depth)
    }
}


module.exports = {
    getWindSpeed: async function (householdID){
        const household = await Household.findById(householdID)
        return stoch.norm(household.windSimulation.mu, household.windSimulation.sigma, 1)
    },

    updateWindParameter: function (){
        //updateCluster()
    }
}





