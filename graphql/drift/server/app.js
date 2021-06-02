const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');

const gqlSchema = require('./schema');

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOST, MONGO_DB, MONGO_PORT } =
  process.env;

const mongoURI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
mongoose.Promise = global.Promise;
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('Database connected'))
  .catch((e) => console.log('Error connecting to Database: ', e));

const app = new express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: gqlSchema,
    graphiql: true,
  })
);

module.exports = app;
