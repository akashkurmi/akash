const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLSchema,
} =graphql

const {USER_LIST}=require('./queries/queries')



const RootQuery= new GraphQLObjectType({
  name: 'UserList',
  fields: {
    User: USER_LIST
  }
})

module.exports = new GraphQLSchema({
  query:RootQuery
})
