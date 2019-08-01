import { GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql';
import { findOneAuthor, findAllAuthors } from '../models/authors/authors_crud';
import { findAllPost, findOnePost } from '../models/posts/post_crud';
import { AuthorType, PostType } from './types';

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'Root query for all types and function',
  fields: {
    authors: {
      type: GraphQLList(AuthorType),
      resolve: () => findAllAuthors()
    },

    author: {
      type: AuthorType,
      args: { id: { type: GraphQLString } },
      resolve: (_parents, args) => findOneAuthor({ _id: args.id })
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
