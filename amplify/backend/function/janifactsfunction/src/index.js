const { ApolloServer, gql } = require('apollo-server-lambda');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello from Apollo!',
  },
};

const server = newApolloServer({
    typeDefs,
    resolvers,
    context: ({event, context}) => ({
        headers: event.headers
    })
})
