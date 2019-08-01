import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLList } from 'graphql';
import { AuthorType } from './types';

import { updateAuthor } from '../models/authors/authors_crud';
import signinAuthor from '../middlewares/auth/signin';
import signupAuthor from '../middlewares/auth/signup';

const mutation = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Root mutations for all post functions',
  fields: {
    signup: {
      type: AuthorType,
      description: 'Add a new author to the database',
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve: (_, args) => signupAuthor(args)
    },

    signin: {
      type: GraphQLList(AuthorType),
      description: 'login to the platform as an authorized user',
      args: {
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve: (_, args, context, info) => signinAuthor(args, { context, info })
    },

    updateAuthor: {
      type: AuthorType,
      description: 'Update author details in the database',
      args: {
        id: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve: (_, args) => {
        const { id, ...payload } = args;
        return updateAuthor(id, payload);
      }
    }
  }
});

export default mutation;
