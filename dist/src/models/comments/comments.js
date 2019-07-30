"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    body: {
        type: String,
        minlength: 1,
        maxlength: 500,
        required: true
    },
    post: {
        type: mongoose_1.SchemaTypes.ObjectId,
        ref: 'posts',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
exports.default = mongoose_1.model('comments', schema);
//# sourceMappingURL=comments.js.map