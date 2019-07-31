"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
exports.AuthorType = new graphql_1.GraphQLObjectType({
    name: 'Author',
    fields: function () { return ({
        id: {
            type: graphql_1.GraphQLString,
            description: 'this is the author id'
        },
        name: {
            type: graphql_1.GraphQLString,
            description: 'this is the author name'
        },
        email: {
            type: graphql_1.GraphQLString,
            description: 'this is the authors email'
        },
        password: {
            type: graphql_1.GraphQLString,
            description: 'this is the author password'
        }
    }); }
});
//# sourceMappingURL=types.js.map