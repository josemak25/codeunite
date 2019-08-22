import { Document } from 'mongoose';

export interface UserInterface extends Document {
  name: string;
  email: string;
  password: string;
  createdAt?: string;
  _id: string;
}

export interface UserUpdateInterface {
  name?: string;
  email?: string;
  password?: string;
  user?: TokenInterface | any;
}

export interface PostInterface extends Document {
  title: string;
  description: string;
  content: string;
  thumbnail?: string;
  author_id: string;
  link?: string;
  categories?: string;
  pubDate?: string;
}

export interface PostUpdateInterface {
  title?: string;
  description?: string;
  thumbnail?: string;
  link?: string;
  content?: string;
  categories?: string;
}

export interface CommentInterface extends Document {
  body: string;
  post: string;
  createdAt: string;
}

export interface ErrorInterface {
  message: string;
  path: string[];
  type: string;
}

export interface SignupUserInterface {
  email: string;
  password: string;
}

export interface ICreateUserInput {
  email: UserInterface['email'];
  name: UserInterface['name'];
  password: UserInterface['password'];
  _id: UserInterface['_id'];
}

export interface TokenInterface {
  id: string;
  email: string;
  iat: number;
  exp: number;
}
