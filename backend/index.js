const { ApolloServer, makeExecutableSchema } = require('apollo-server')
const merge  = require('lodash/merge')

const name = require('./types/name')

const Query = `
    type Query {
        _empty: String
    }
`
const resolvers = {}

const schema = makeExecutableSchema({
  typeDefs: [ Query, name.typeDefs ],
  resolvers: merge(resolvers, name.resolvers),
})

const server = new ApolloServer({
  schema })

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
