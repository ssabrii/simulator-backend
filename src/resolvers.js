const random = require('random-number');
const mongoose = require('mongoose');
const wind = require('./simulation/windSpeed')
const consumption = require('./simulation/electricityConsumption')
const { Household } = require('./dbModels')
const yahoo = require('./apis/yahoo')

async function generateHouseholds(amount){
    for(let i = 0; i < amount; i++){
        const x = (67.0 + random({max: 2.0, min: -2.0})).toFixed(4)
        const y = (26.0 + random({max: 2.0, min: -2.0})).toFixed(4)
        console.log("X: " + x + " Y: " + y)
        const household = new Household(
            {
                coords: {
                    x: x,
                    y: y
                },
                windSimulation: {
                    mu: random({max: 70, min: 2}),
                    sigma: random({max: 10, min: 0})
                },
                picture: "TBA",
                weatherData: {
                    lastRetrieved: new Date(),
                    temperature: await yahoo.fetchTemperature(x, y),
                    timezone: await yahoo.fetchTimezone(x, y)
                }
            }
        )
        household.save((err, _) => console.log(err))
    }    
}


const resolvers = {
    Query: {
        house: (_, { id }) => {
            return {
                windSpeed: wind.getWindSpeed(id),
                electricityConsumption: consumption.getElectricityConsumption(id),
                failure: Math.random() >= 0.99
            }
        },
        electricityPrice: () => {
            return random({min: 2.0, max: 20.0}).toFixed(2)
            
        },
    
    },
    Mutation: {
        updateWindParameters: () => {
            wind.updateWindParameters()
            return true
        },
        insertHouseholds: (_, { amount }) => {
            console.log('Inserting ' + amount + ' new random households')
            generateHouseholds(amount)
            return true
        },
    }
};

module.exports = resolvers;
