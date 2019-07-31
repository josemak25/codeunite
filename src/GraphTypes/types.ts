import { GraphQLObjectType, GraphQLString } from 'graphql';

export const AuthorType = new GraphQLObjectType({
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
    password: {
      type: GraphQLString,
      description: 'this is the author password'
    }
  })
});

export const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    title: {
      type: GraphQLString,
      description: 'this is the title of the post'
    },
    author: {
      type: GraphQLString,
      description: 'this is the id of the author whom created the post'
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
