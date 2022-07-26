import { GraphQLServer } from 'graphql-yoga';
import query from './query/query';
import usersData from './database/usersData';

/*
* This demo is built using graphql-yoga
* https://github.com/prisma-labs/graphql-yoga
*/

const server = new GraphQLServer({

  // typeDefs are the place where the queries types are included
  typeDefs: './src/schema.graphql',

  // resolvers are the place where the queries are instanced in POST request
  resolvers: { Query: query },
  context: usersData
});

/*
* Access the GraphQL playground:
* http://localhost:4000
*/

server.start(() => {
  console.log('Server is running on http://localhost:4000');
});

server.post("/users", (request, response) => { return response.response("method working")})

