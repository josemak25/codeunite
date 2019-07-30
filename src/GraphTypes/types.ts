import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList, GraphQLInt } from 'graphql';

export const authorType = new GraphQLObjectType({
  name: 'Author',
  fields: {
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    }
  }
});

export const postsType = new GraphQLObjectType({
  name: 'Posts',
  fields: {
    id: {
      type: GraphQLString
    },
    title: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    author: {
      type: authorType,
      resolve: (source, _params) => {
        return source.author;
      }
    }
  }
});
