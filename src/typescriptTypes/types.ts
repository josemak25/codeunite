import { Document } from 'mongoose';

export interface authorsSchema extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: string;
}

export interface commentsSchema extends Document {
  body: string;
  post: string;
  createdAt: string;
}

export interface postsSchema extends Document {
  title: string;
  author: string;
  description: string;
  thumbnail?: string;
  link?: string;
  content: string;
  categories?: string;
  pubDate?: string;
}
