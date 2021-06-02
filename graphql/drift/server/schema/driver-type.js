const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;

const PointType = require('./point-type');

const DriverType = new GraphQLObjectType({
  name: 'DriverType',
  fields: () => ({
    id: { type: GraphQLID },
    userId: { type: GraphQLID },
    geometry: { type: PointType },
  }),
});

module.exports = DriverType;
