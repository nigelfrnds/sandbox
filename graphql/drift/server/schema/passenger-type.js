const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;

const PointType = require('./point-type');

const PassengerType = new GraphQLObjectType({
  name: 'PassengerType',
  fields: () => ({
    id: { type: GraphQLID },
    userId: { type: GraphQLID },
    geometry: { type: PointType },
  }),
});

module.exports = PassengerType;
