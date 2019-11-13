const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
    electricityPrice: Float!
    house(id: Int!): House
  }  

  type House {
    windSpeed: Float!,
    electrictyConsumption: Float!,
    failure: Boolean!
  }
`;
module.exports = typeDefs;