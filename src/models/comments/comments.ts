import { Schema, model, SchemaTypes } from 'mongoose';

import { commentsSchema } from '../../typescriptTypes/types';

const schema = new Schema({
  body: {
    type: String,
    minlength: 1,
    maxlength: 500,
    required: true
  },
  post: {
    type: SchemaTypes.ObjectId,
    ref: 'posts',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default model<commentsSchema>('comments', schema);
