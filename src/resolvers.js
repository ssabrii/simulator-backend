const wind = require('./windSpeed')

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
            return (Math.random() * (10.0 - 2.0) + 2.0).toFixed(2)
            
        }
    },
};

module.exports = resolvers;
