import { create, findOne, updateOne, deleteOne, findAll } from '../../queries/post/post.queries';
import { PostInterface, PostUpdateInterface } from '../../typescriptTypes/types';

export const findAllPost = (args = {}) => {
  return findAll(args);
};

export const findOnePost = (post = {}) => {
  return findOne(post);
};

export const createPost = (post: PostInterface) => {
  return create(post);
};

export const updatePost = (postID: string, postUpdate: PostUpdateInterface) => {
  return updateOne(postID, postUpdate);
};

export const deletePost = (postID: string) => {
  return deleteOne(postID);
};
