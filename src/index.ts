import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import http from "http";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

const typeDefs = `
    type Flight {
        flightNumber: String!
    }

    type Query {
        flights: [Flight]
    }
`;

const flights = [
  {
    flightNumber: "2",
  },
  {
    flightNumber: "3",
  },
  {
    flightNumber: "4",
  },
  {
    flightNumber: "5",
  },
];

const resolvers = {
  Query: {
    flights: () => flights,
  },
};

const app = express();

const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use("/", express.json(), expressMiddleware(server));

await new Promise<void>((resolve) =>
  httpServer.listen({ port: 4000 }, resolve)
);

const PORT = 4000;

console.log(`\nServer running at http://localhost:${PORT}/`);
