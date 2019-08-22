import { GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql';
import { findOneUser, findAllUsers } from '../controllers/user/User';
import { findAllPost, findOnePost } from '../controllers/post/Post';
import { UserType, PostType } from './types';
import checkRequestAuth from '../services/auth.service';

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'Root query for all types and function',
  fields: {
    users: {
      type: GraphQLList(UserType),
      resolve: async (_parent, _, context) => {
        try {
          const user = checkRequestAuth(context.req);

          if (!user) {
            return new Error('You are not authorized to perform this operation');
          }

          if (!user.isAdmin) {
            return new Error('You are not authorized to perform this operation');
          }

          return await findAllUsers();
        } catch (error) {
          throw new Error(error.message);
        }
      }
    },

    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve: (_parents, args) => findOneUser(args.id)
    },

    posts: {
      type: GraphQLList(PostType),
      resolve: () => findAllPost()
    },

    post: {
      type: PostType,
      args: { id: { type: GraphQLString } },
      resolve: (_parent, args) => findOnePost({ _id: args.id })
    }
  }
});

export default query;
