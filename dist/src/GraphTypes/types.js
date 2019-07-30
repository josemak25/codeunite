"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
exports.authorType = new graphql_1.GraphQLObjectType({
    name: 'Author',
    fields: {
        id: {
            type: graphql_1.GraphQLString
        },
        name: {
            type: graphql_1.GraphQLString
        },
        age: {
            type: graphql_1.GraphQLInt
        }
    }
});
exports.postsType = new graphql_1.GraphQLObjectType({
    name: 'Posts',
    fields: {
        id: {
            type: graphql_1.GraphQLString
        },
        title: {
            type: graphql_1.GraphQLString
        },
        description: {
            type: graphql_1.GraphQLString
        },
        author: {
            type: exports.authorType,
            resolve: function (source, _params) {
                return source.author;
            }
        }
    }
});
//# sourceMappingURL=types.js.map