import Post from '../../models/posts/Post';
import { PostInterface, PostUpdateInterface } from '../../typescriptTypes/types';

export const findAll = (args = {}) => {
  return Post.find(args)
    .sort({ pubDate: -1 })
    .exec();
};

export const findOne = (post = {}) => {
  return Post.findOne(post).exec();
};

export const create = (post: PostInterface) => {
  return Post.create(post);
};

export const updateOne = (postID: string, postUpdate: PostUpdateInterface) => {
  return Post.findByIdAndUpdate(postID, postUpdate, { new: true }).exec();
};

export const deleteOne = (postID: string) => {
  return Post.findByIdAndDelete({ _id: postID }).exec();
};
