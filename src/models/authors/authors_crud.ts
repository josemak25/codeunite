import Authors from './authors';
import { SignupAuthorInterface, AuthorUpdateInterface } from '../../typescriptTypes/types';
import { validateUpdateAuthor } from '../../middlewares/authors/authorValidator';
import { constructError } from '../../utils/utilities';

export const findAllAuthors = async () => {
  try {
    return await Authors.find().exec();
  } catch (error) {
    return new Error(error.message);
  }
};

export const findOneAuthor = async (author = {}) => {
  try {
    return await Authors.findOne(author).exec();
  } catch (error) {
    return new Error(error.message);
  }
};

export const createAuthor = async (author: SignupAuthorInterface) => {
  try {
    return await Authors.create(author);
  } catch (error) {
    return new Error(error.message);
  }
};

export const updateAuthor = async (authorID: string, authorUpdate: AuthorUpdateInterface) => {
  try {
    const { error, value } = validateUpdateAuthor(authorUpdate);

    if (error) return constructError(error.details);

    return await Authors.findByIdAndUpdate(authorID, value, { new: true }).exec();
  } catch (error) {
    return new Error(error.message);
  }
};

export const deleteAuthor = async (authorID: string) => {
  try {
    return await Authors.findByIdAndDelete(authorID).exec();
  } catch (error) {
    return new Error(error.message);
  }
};
