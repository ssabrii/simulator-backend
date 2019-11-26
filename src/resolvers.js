const wind = require('./windSpeed')
const price = require('./electrictyPrice')

const resolvers = {
    Query: {
        house: (_, { id }) => {
            return {
                windSpeed: wind.getWindSpeed(id),
                electrictyConsumption: (Math.random() * (1000.0 - 100.0) + 100.0).toFixed(2),
                failure: Math.random() >= 0.99
            }
        },
        electricityPrice: () => {
            //electrictyPrice
            // electrictyPrice: price.getPrice
            return  price.getElectricityPrice()
        }
    },
};

module.exports = resolvers;
