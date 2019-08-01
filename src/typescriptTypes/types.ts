import { Document } from 'mongoose';

export interface AuthorInterface extends Document {
  name: string;
  email: string;
  password: string;
  createdAt?: string;
}

export interface AuthorUpdateInterface {
  name?: string;
  email?: string;
  password?: string;
}

export interface PostInterface extends Document {
  title: string;
  author: string;
  description: string;
  thumbnail?: string;
  link?: string;
  content: string;
  categories?: string;
  pubDate?: string;
}

export interface PostUpdateInterface {
  title: string;
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

export interface SignupAuthorInterface {
  name: string;
  email: string;
  password: string;
}
