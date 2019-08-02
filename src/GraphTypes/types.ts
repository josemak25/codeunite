import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import { findOneAuthor } from '../models/authors/authors_crud';
import { findAllPost } from '../models/posts/post_crud';

export const AuthorType: any = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'this is the author id'
    },

    name: {
      type: GraphQLString,
      description: 'this is the author name'
    },

    email: {
      type: GraphQLString,
      description: 'this is the authors email'
    },

    posts: {
      type: GraphQLList(PostType),
      resolve: parent => findAllPost({ author_id: parent.id })
    },

    token: {
      type: GraphQLString,
      description: 'this is the author access token'
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
      type: AuthorType,
      description: 'this is the id of the author whom created the post',
      resolve: (parent, _args) => findOneAuthor(parent.author_id)
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
