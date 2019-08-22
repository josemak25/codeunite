require('dotenv').config();
import { Schema, model } from 'mongoose';
import { sign } from 'jsonwebtoken';
import bcryptService from '../../services/bcrypt.service';

import { UserInterface } from '../../typescriptTypes/types';

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
  isAdmin: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

schema.methods.generateAuthToken = function() {
  const SECRET_KEY: any = process.env.SECRET_KEY;
  return sign(this.toJSON(), SECRET_KEY, { expiresIn: '24h' });
};

schema.pre<UserInterface>('save', async function(next: any) {
  this.password = await bcryptService().hashPassword(this.password);
  next();
});

schema.methods.toJSON = function() {
  const user = this.toObject();
  delete user.password;
  return user;
};

export default model<UserInterface>('users', schema);
