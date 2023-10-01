import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import http from "http";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { FlightScheduleApi } from "./dataSources";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

const PORT = 4000;
const app = express();

const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  "/",
  express.json(),
  expressMiddleware(server, {
    context: async () => ({
      dataSources: {
        flightScheduleApi: new FlightScheduleApi(),
      },
    }),
  })
);

await new Promise<void>((resolve) =>
  httpServer.listen({ port: PORT }, resolve)
);

console.log(`\nServer running at http://localhost:${PORT}/`);
