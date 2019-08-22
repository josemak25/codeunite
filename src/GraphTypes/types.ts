import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import { findOneUser } from '../controllers/user/User';
import { findAllPost } from '../controllers/post/Post';

export const UserType: any = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'this is the user id'
    },

    name: {
      type: GraphQLString,
      description: 'this is the user name'
    },

    email: {
      type: GraphQLString,
      description: 'this is the users email'
    },

    posts: {
      type: GraphQLList(PostType),
      resolve: parent => findAllPost({ author_id: parent.id })
    },

    token: {
      type: GraphQLString,
      description: 'this is the user access token'
    }
  })
});

export const PostType: any = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'this is the id of the post'
    },

    title: {
      type: GraphQLString,
      description: 'this is the title of the post'
    },

    author: {
      type: UserType,
      description: 'this is the id of the user whom created the post',
      resolve: (parent, _args) => findOneUser(parent.author_id)
    },

    description: {
      type: GraphQLString,
      description: 'this is the description of the post'
    },

    thumbnail: {
      type: GraphQLString,
      description: 'this is the thumbnail picture of the post'
    },

    link: {
      type: GraphQLString,
      description: 'this an external link attached if the post was gotten from na external link'
    },

    content: {
      type: GraphQLString,
      description: 'this is the body of the post'
    },

    category: {
      type: GraphQLString,
      description: 'this is the category of the post'
    },

    pubDate: {
      type: GraphQLString,
      description: 'this is the published date of the post'
    }
  })
});
