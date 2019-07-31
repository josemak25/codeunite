import { Schema, model, SchemaTypes } from 'mongoose';

import { PostInterface } from '../../typescriptTypes/types';

const schema = new Schema({
  title: {
    type: String,
    trim: true,
    minlength: 5,
    maxlength: 150,
    required: true
  },

  author_id: {
    type: SchemaTypes.ObjectId,
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
    minlength: 5,
    default: undefined
  },

  link: {
    type: String,
    trim: true,
    lowercase: true,
    minlength: 5,
    default: undefined
  },

  content: {
    type: String,
    minlength: 5,
    trim: true,
    required: true
  },

  category: {
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

export default model<PostInterface>('posts', schema);
