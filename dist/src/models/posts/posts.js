"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    title: {
        type: String,
        trim: true,
        minlength: 5,
        maxlength: 150,
        required: true
    },
    author: {
        type: mongoose_1.SchemaTypes.ObjectId,
        ref: 'authors',
        required: true
    },
    description: {
        type: String,
        trim: true,
        minlength: 10,
        maxlength: 150,
        required: true
    },
    thumbnail: {
        type: String,
        trim: true,
        lowercase: true,
        minlength: 5
    },
    link: {
        type: String,
        trim: true,
        lowercase: true,
        minlength: 5
    },
    content: {
        type: String,
        minlength: 5,
        trim: true,
        required: true
    },
    categories: {
        type: String,
        minlength: 5,
        maxlength: 50,
        trim: true
    },
    pubDate: {
        type: Date,
        default: Date.now
    }
});
exports.default = mongoose_1.model('posts', schema);
//# sourceMappingURL=posts.js.map