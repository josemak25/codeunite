import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';
import { AuthorType } from './types';

import { createAuthor, updateAuthor } from '../models/authors/authors_crud';
import signinAuthor from '../middlewares/auth/auth';

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
      resolve: (_, args) => createAuthor(args)
    },

    signin: {
      type: AuthorType,
      description: 'login to the platform as authorized user',
      args: {
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve: (_, args) => signinAuthor(args)
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
