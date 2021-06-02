const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;

const UserType = require('./user-type');
const DriverType = require('./driver-type');
const PassengerType = require('./passenger-type');

const User = require('../models/user');
const Driver = require('../models/driver');
const Passenger = require('../models/passenger');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find({});
      },
    },
    drivers: {
      type: new GraphQLList(DriverType),
      resolve() {
        return Driver.find({});
      },
    },
    passengers: {
      type: new GraphQLList(PassengerType),
      resolve() {
        return Passenger.find({});
      },
    },
  }),
});

module.exports = RootQuery;
