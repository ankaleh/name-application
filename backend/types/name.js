const { UserInputError } = require('apollo-server')
const fetch = require('node-fetch')

const fetchNames = async () => {
  const response = await fetch('https://raw.githubusercontent.com/solita/dev-academy-2021/main/names.json')
  const names = response.json()
  return names
}

const typeDefs = `
    type Name {
        id: ID!,
        name: String!,
        amount: Int!
    }
    extend type Query {
        orderedByAmount: [Name!]!,
        inAlphabeticalOrder: [String!]!,
        amountAllNames: Int!,
        nameAmount (name: String!): Int!,
    }
`
const resolvers = {
  Query: {
    orderedByAmount: async () => {
      const names = await fetchNames().then(data => data.names)
      return names.sort( (a, b) => a.amount - b.amount).reverse()
    },
    inAlphabeticalOrder: async () => {
      const names = await fetchNames().then(data => data.names)
      return names.map(n => n.name).sort()
    },
    amountAllNames: async () => {
      const names = await fetchNames().then(data => data.names)
      return names.map(n => n.amount).reduce((total, num) => total + num)
    },
    nameAmount: async (root, args) => {
      const names = await fetchNames().then(data => data.names)
      const found = names.find(n => n.name === args.name)
      if (!found) {
        throw new UserInputError('Nimeä ei löytynyt!', {
          invalidArgs: args.name
        })
      }
      return names.find(n => n.name === args.name).amount

    }
  }
}
module.exports = { typeDefs, resolvers }