const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLFloat } = graphql;

const PointType = new GraphQLObjectType({
  name: 'PointType',
  fields: () => ({
    type: { type: GraphQLString },
    coordinates: { type: new GraphQLList(GraphQLFloat) },
  }),
});

module.exports = PointType;
