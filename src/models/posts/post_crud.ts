import Posts from './posts';
import { PostInterface, PostUpdateInterface } from '../../typescriptTypes/types';
import { validateUpdatePost } from '../../middlewares/posts/postValidator';
import { constructError } from '../../utils/utilities';

export const findAllPost = async (args = {}) => {
  try {
    return await Posts.find(args)
      .sort({ pubDate: -1 })
      .exec();
  } catch (error) {
    return new Error(error.message);
  }
};

export const findOnePost = async (post = {}) => {
  try {
    return await Posts.findOne(post).exec();
  } catch (error) {
    return new Error(error.message);
  }
};

export const createPost = (post: PostInterface) => {
  try {
    return Posts.create(post);
  } catch (error) {
    return new Error(error.message);
  }
};

export const updatePost = async (postID: string, postUpdate: PostUpdateInterface) => {
  try {
    const { error, value } = validateUpdatePost(postUpdate);

    if (error) return constructError(error.details);

    return await Posts.findByIdAndUpdate(postID, value, { new: true }).exec();
  } catch (error) {
    return new Error(error.message);
  }
};

export const deletePost = async (postID: string) => {
  try {
    return await Posts.findByIdAndDelete(postID).exec();
  } catch (error) {
    return new Error(error.message);
  }
};
