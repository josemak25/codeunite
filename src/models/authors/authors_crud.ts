import Authors from './authors';
import { AuthorInterface, AuthorUpdateInterface } from '../../typescriptTypes/types';
import { validateNewAuthor, validateUpdateAuthor } from '../../middlewares/authors/authorValidator';
import { constructError } from '../../utils/utilities';

export const findAllAuthors = async (author = {}) => {
  try {
    return await Authors.find(author).exec();
  } catch (error) {
    return new Error(error.message);
  }
};

export const findOneAuthor = async (authorID: string) => {
  try {
    return await Authors.findOne({ _id: authorID }).exec();
  } catch (error) {
    return new Error(error.message);
  }
};

export const createAuthor = async (author: AuthorInterface) => {
  try {
    const { error, value } = validateNewAuthor(author);

    if (error) return constructError(error.details);

    return await Authors.create(value);
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
