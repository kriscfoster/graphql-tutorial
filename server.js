const express = require('express');
const cors = require('cors');
const expressGraphQL = require('express-graphql');
const schema = require('./schema');

const app = express();
const PORT = 4000;

app.use(cors());

app.use('/graphql', expressGraphQL({
  graphiql: true,
  schema: schema
}))

app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});
