import { Schema, model } from 'mongoose';
import { AuthorInterface } from '../../typescriptTypes/types';

const schema = new Schema({
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
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default model<AuthorInterface>('authors', schema);
