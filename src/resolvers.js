const resolvers = {
    Query: {
        house: (_, { id }) => {
            return {
                windSpeed: (Math.random() * (60.0 - 0.0)).toFixed(2),
                electrictyConsumption: (Math.random() * (1000.0 - 100.0) + 100.0).toFixed(2),
                failure: Math.random() >= 0.9
            }
        },
        electricityPrice: () => {
            return (Math.random() * (10.0 - 2.0) + 2.0).toFixed(2)
            
        }
    },
};

module.exports = resolvers;