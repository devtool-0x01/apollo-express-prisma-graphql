const fs = require("fs");
const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
// const { Manufacturers, Vehicles } = require("./dummydata");
const { PrismaClient } = require("@prisma/client");

const PORT = process.env.PORT || 3001;
const app = express();
const db = new PrismaClient();

const test = () =>
  db.manufacturer.findMany({
    include: {
      country: true,
      Vehicles: true,
    },
  });

const schema = fs.readFileSync("./schema/schema.graphql", { encoding: "utf8" });
const typeDefs = gql(schema);

// const { Query } = require("./resolvers/Query");
// const { Vehicle } = require("./resolvers/Vehicles");
// const { Manufacturer } = require("./resolvers/Manufacturers");
// const { Country } = require("./resolvers/Country");
const { Query, Vehicle, Manufacturer, Country } = require("./resolvers");

const resolvers = {
  Query,
  Vehicle,
  Manufacturer,
  Country,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    db,
  },
  uploads: {
    maxFiles: 1,
    maxFileSize: 300,
  },
  plugins: [
    {
      serverWillStart(reqCtx) {
        console.log("server start ...");
      },
      requestDidStart(reqCtx) {
        return {
          didEncounterErrors(arg1, arg2) {
            console.error("apollo error ...");
          },
          // didResolveOperation(reqCtx) {
          //   console.info("operation response ...");
          // },
        };
      },
    },
  ],
  // playground: false,
});

server.applyMiddleware({ app, path: "/graphql" });

app.disable("x-powered-by");
app.use("/", (_req, res, _next) => {
  res.end();
});

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}/graphql`);
});
