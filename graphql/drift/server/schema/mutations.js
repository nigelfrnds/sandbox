const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const UserType = require('./user-type');
const DriverType = require('./driver-type');
const PassengerType = require('./passenger-type');

const User = require('../models/user');
const Driver = require('../models/driver');
const Passenger = require('../models/passenger');

const mutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
      },
      resolve(parentValue, { email }) {
        return new User({ email }).save();
      },
    },
    createDriver: {
      type: DriverType,
      args: {
        userId: { type: GraphQLID },
      },
      resolve(parentValue, { userId }) {
        return new Driver({ userId }).save();
      },
    },
    createPassenger: {
      type: PassengerType,
      args: {
        userId: { type: GraphQLID },
      },
      resolve(parentValue, { userId }) {
        return new Passenger({ userId }).save();
      },
    },
  },
});

module.exports = mutations;
