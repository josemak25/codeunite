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
