
let names = [
    {
      "name": "Ville",
      "amount": 24
    },
    {
      "name": "Anna",
      "amount": 6
    },
    {
      "name": "Antti",
      "amount": 22
    },
    {
      "name": "Sanna",
      "amount": 5
    },
    {
      "name": "Mikko",
      "amount": 19
    },
    {
      "name": "Minna",
      "amount": 5
    },
    {
      "name": "Timo",
      "amount": 18
    },
    {
      "name": "Satu",
      "amount": 5
    },
    {
      "name": "Tuomas",
      "amount": 16
    },
    {
      "name": "Tiina",
      "amount": 5
    },
    {
      "name": "Tero",
      "amount": 15
    },
    {
      "name": "Kati",
      "amount": 5
    },
    {
      "name": "Sami",
      "amount": 15
    },
    {
      "name": "Henna",
      "amount": 4
    },
    {
      "name": "Mika",
      "amount": 12
    },
    {
      "name": "Liisa",
      "amount": 4
    },
    {
      "name": "Janne",
      "amount": 12
    },
    {
      "name": "Paula",
      "amount": 4
    },
    {
      "name": "Petri",
      "amount": 11
    },
    {
      "name": "Suvi",
      "amount": 4
    }
]

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
        orderedByAmount: () => names.sort( (a, b) => a.amount - b.amount).reverse(),
        inAlphabeticalOrder: () => names.map(n => n.name).sort(),
        amountAllNames: () => names.map(n => n.amount).reduce((total, num) => total + num),
        nameAmount: (root, args) => names.find(n => n.name === args.name).amount
    }
}
module.exports = { typeDefs, resolvers}