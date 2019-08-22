import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';
import { UserType, PostType } from './types';
import checkRequestAuth from '../services/auth.service';
import { updateUser, signIn, signUp, deleteUser } from '../controllers/user/User';
import { createPost, deletePost, updatePost } from '../controllers/post/Post';
import { validateNewPost, validateUpdatePost } from '../middlewares/post/postValidator';
import { constructError, validateSignupInput, validateSigninInput } from '../utils/utilities';
import { validateUserUpdate, validateUserSignup } from '../middlewares/user/userValidator';

const mutation = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Root mutations for all post functions',
  fields: {
    signup: {
      type: UserType,
      description: 'Add a new author to the database',
      args: {
        name: { type: GraphQLNonNull(GraphQLString!) },
        email: { type: GraphQLNonNull(GraphQLString!) },
        password: { type: GraphQLNonNull(GraphQLString!) }
      },
      resolve: async (_, args) => {
        try {
          const emptyFields = validateSignupInput(args);

          if (Object.keys(emptyFields).length) return new Error(JSON.stringify(emptyFields));

          const { error, value: payload } = validateUserSignup(args);

          if (error) {
            return new Error(JSON.stringify(constructError(error.details)));
          }

          const user = await signUp(payload);
          return user;
        } catch (error) {
          return new Error(error.message);
        }
      }
    },

    signin: {
      type: UserType,
      description: 'login to the platform as an authorized user',
      args: {
        email: { type: GraphQLNonNull(GraphQLString!) },
        password: { type: GraphQLNonNull(GraphQLString!) }
      },
      resolve: async (_, args) => {
        try {
          const emptyFields = validateSigninInput(args);

          if (Object.keys(emptyFields).length) return new Error(JSON.stringify(emptyFields));

          return await signIn(args);
        } catch (error) {
          return new Error(error.message);
        }
      }
    },

    updateUser: {
      type: UserType,
      description: 'Update author details in the database',
      args: {
        name: { type: GraphQLString! },
        email: { type: GraphQLString! },
        password: { type: GraphQLString! }
      },
      resolve: async (_, args, context) => {
        const { error, value: payload } = validateUserUpdate(args);

        if (error) throw new Error(JSON.stringify(constructError(error.details)));

        try {
          const user = checkRequestAuth(context.req);

          if (!user) {
            return new Error('You are not authorized to perform this operation');
          }

          return await updateUser({ userID: user._id, ...payload });
        } catch (error) {
          throw new Error(error.message);
        }
      }
    },

    deleteUser: {
      type: PostType,
      description: 'Delete a post as an authorized user',
      resolve: async (_, _args, context) => {
        const user = checkRequestAuth(context.req);

        if (!user) {
          return new Error('You are not authorized to perform this operation');
        }

        return await deleteUser(user.id);
      }
    },

    createPost: {
      type: PostType,
      description: 'Add a new post as an authorized user',
      args: {
        title: { type: GraphQLNonNull(GraphQLString!) },
        description: { type: GraphQLNonNull(GraphQLString!) },
        content: { type: GraphQLNonNull(GraphQLString!) },
        thumbnail: { type: GraphQLString, defaultValue: 'Unknown' },
        link: { type: GraphQLString, defaultValue: 'Unknown' },
        category: { type: GraphQLString, defaultValue: 'Unknown' }
      },
      resolve: async (_, args, context) => {
        try {
          const user = checkRequestAuth(context.req);

          if (!user) {
            return new Error('You are not authorized to perform this operation');
          }

          args.author_id = user._id;

          const { error, value: payload } = validateNewPost(args);

          if (error) throw new Error(JSON.stringify(constructError(error.details)));

          return await createPost(payload);
        } catch (error) {
          throw new Error(error.message);
        }
      }
    },

    updatePost: {
      type: PostType,
      description: 'Update a post as an authorized user',
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

        if (!user) {
          return new Error('You are not authorized to perform this operation');
        }

        const { error, value: payload } = validateUpdatePost(args);

        if (error) return constructError(error.details);

        return await updatePost(user.id, payload);
      }
    },

    deletePost: {
      type: PostType,
      description: 'Delete a post as an authorized author',
      resolve: async (_, _args, context) => {
        const user = checkRequestAuth(context.req);

        if (!user) {
          return new Error('You are not authorized to perform this operation');
        }

        return await deletePost(user.id);
      }
    }
  }
});

export default mutation;
