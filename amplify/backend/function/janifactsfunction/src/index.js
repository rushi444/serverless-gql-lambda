const { ApolloServer, gql } = require('apollo-server-lambda');
const axios = require('axios')

const typeDefs = gql`
  type Paper {
    paper_id: ID!
  }

  type Query {
    hello: String
    covidData: [Paper]
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Jani hates JaniFacts',
    covidData: async () => {
        const data = [
            {
                paper_id: 'ahsdahsdgas'
            },
            {
                paper_id: "ahasdgsdgs"
            }
        ]
      return data;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
});

exports.handler = server.createHandler({
  cors: {
    origin: '*',
    credientials: true,
  },
});
