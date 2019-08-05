import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';
import { AuthorType, PostType } from './types';

import { updateAuthor } from '../models/authors/authors_crud';
import signinAuthor from '../middlewares/auth/signin';
import signupAuthor from '../middlewares/auth/signup';
import checkRequestAuth from '../middlewares/auth/checkRequestAuth';
import { createPost, deletePost } from '../models/posts/post_crud';
import { validateNewPost } from '../middlewares/posts/postValidator';
import { constructError } from '../utils/utilities';
import { validateUpdateAuthor } from '../middlewares/authors/authorValidator';

const mutation = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Root mutations for all post functions',
  fields: {
    signup: {
      type: AuthorType,
      description: 'Add a new author to the database',
      args: {
        name: { type: GraphQLNonNull(GraphQLString!) },
        email: { type: GraphQLNonNull(GraphQLString!) },
        password: { type: GraphQLNonNull(GraphQLString!) }
      },
      resolve: async (_, args) => await signupAuthor(args)
    },

    signin: {
      type: AuthorType,
      description: 'login to the platform as an authorized user',
      args: {
        email: { type: GraphQLNonNull(GraphQLString!) },
        password: { type: GraphQLNonNull(GraphQLString!) }
      },
      resolve: async (_, args) => await signinAuthor(args)
    },

    updateAuthor: {
      type: AuthorType,
      description: 'Update author details in the database',
      args: {
        id: { type: GraphQLNonNull(GraphQLString!) },
        name: { type: GraphQLString! },
        email: { type: GraphQLString! },
        password: { type: GraphQLString! }
      },
      resolve: async (_, args, context) => {
        const { error, value } = validateUpdateAuthor(args);

        if (error) throw new Error(JSON.stringify(constructError(error.details)));

        try {
          const user = checkRequestAuth(context.req);

          if (user) {
            const { id, ...payload } = value;
            return await updateAuthor(id, payload);
          }
          return;
        } catch (error) {
          throw new Error(error.message);
        }
      }
    },

    createPost: {
      type: PostType,
      description: 'Add a new post as an authorized author',
      args: {
        title: { type: GraphQLNonNull(GraphQLString!) },
        description: { type: GraphQLNonNull(GraphQLString!) },
        content: { type: GraphQLNonNull(GraphQLString!) },
        thumbnail: { type: GraphQLString, defaultValue: 'Unknown' },
        link: { type: GraphQLString, defaultValue: 'Unknown' },
        category: { type: GraphQLString, defaultValue: 'Unknown' }
      },
      resolve: async (_, args, context) => {
        const user = checkRequestAuth(context.req);
        args.author_id = user.id;

        const { error, value } = validateNewPost(args);

        if (error) throw new Error(constructError(error.details));

        return await createPost(value);
      }
    },

    // deletePost: {
    //   type: PostType,
    //   description: 'Delete a post as an authorized author',
    //   args: { id: GraphQLNonNull(GraphQLString!) },
    //   resolve: async (_, args, context) => {
    //     const user = checkRequestAuth(context.req);
    //     args.author_id = user.id;
    //     return await deletePost(args);
    //   }
    // }
  }
});

export default mutation;
