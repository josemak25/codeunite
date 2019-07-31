"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var authors_crud_1 = require("../models/authors/authors_crud");
var types_1 = require("./types");
var query = new graphql_1.GraphQLObjectType({
    name: 'RootQueryType',
    description: 'Root query for all types and function',
    fields: {
        authors: {
            type: graphql_1.GraphQLList(types_1.AuthorType),
            resolve: function () { return authors_crud_1.findAll(); }
        },
        author: {
            type: types_1.AuthorType,
            args: { id: { type: graphql_1.GraphQLString } },
            resolve: function (_parents, args) { return authors_crud_1.findOne(args.id); }
        }
    }
});
exports.default = new graphql_1.GraphQLSchema({
    query: query
});
//# sourceMappingURL=schema.js.map