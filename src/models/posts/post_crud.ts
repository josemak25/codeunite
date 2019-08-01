import Posts from './posts';
import { AuthorInterface, AuthorUpdateInterface } from '../../typescriptTypes/types';
import { validateNewAuthor, validateUpdateAuthor } from '../../middlewares/authors/authorValidator';
import { constructError } from '../../utils/utilities';

export const findAllPost = async (args = {}) => {
  try {
    return await Posts.find(args).exec();
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

export const createPost = (author: AuthorInterface) => {
  try {
    const { error, value } = validateNewAuthor(author);

    if (error) return constructError(error.details);

    return Posts.create(value);
  } catch (error) {
    return new Error(error.message);
  }
};

export const updatePost = async (postID: string, authorUpdate: AuthorUpdateInterface) => {
  try {
    const { error, value } = validateUpdateAuthor(authorUpdate);

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
