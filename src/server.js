import express from "express";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import bodyParser from "body-parser";

import { schema } from "./schema";

const server = express();

server.post("*", bodyParser.json(), graphqlExpress({
  schema,
  tracing: true,
  cacheControl: true,
  context: {
    secrets: {
      TM_API_KEY: process.env.TM_API_KEY
    }
  }
}));

server.get("*", graphiqlExpress({ endpointURL: process.env.UP_STAGE }));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`);
});




