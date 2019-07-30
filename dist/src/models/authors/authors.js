"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    name: {
        type: String,
        lowercase: true,
        trim: true,
        minlength: 3,
        maxlength: 150,
        required: true
    },
    email: {
        type: String,
        index: true,
        unique: true,
        lowercase: true,
        trim: true,
        minlength: 5,
        maxlength: 150,
        required: true
    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 20,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
exports.default = mongoose_1.model('authors', schema);
//# sourceMappingURL=authors.js.map