const { gql } = require('apollo-server');

//electricityGeneration: Float!,

const typeDefs = gql`
  type Query {
    electricityPrice: Float!
    house(id: String!): House
  }  

  type Mutation {
    updateWindParameters : Boolean!
    insertHouseholds(amount: Int!) : Boolean!
  }

  type House {
    windSpeed: Float!,
    electricityConsumption: Float!,
    failure: Boolean!
  }
`;
module.exports = typeDefs;