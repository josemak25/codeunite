import { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLString } from 'graphql';
import { findOne, findAll } from '../models/authors/authors_crud';
import { AuthorType } from './types';

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'Root query for all types and function',
  fields: {
    authors: {
      type: GraphQLList(AuthorType),
      resolve: () => findAll()
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLString } },
      resolve: (_parents, args) => findOne(args.id)
    }
  }
});

export default new GraphQLSchema({
  query
});
