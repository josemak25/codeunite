import Authors from './authors';
import { AuthorInterface, AuthorUpdateInterface } from '../../typescriptTypes/types';
import { validateNewAuthor, validateUpdateAuthor } from '../../middlewares/authorValidator';
import { constructError } from '../../utils/utilities';

export const findAll = async () => {
  try {
    return await Authors.find().exec();
  } catch (error) {
    return new Error(error.message);
  }
};

export const findOne = async (authorID: string) => {
  try {
    return await Authors.findOne({ _id: authorID }).exec();
  } catch (error) {
    return new Error(`No Author with ID ${authorID} Found`);
  }
};

export const createOne = (author: AuthorInterface) => {
  try {
    const { error, value } = validateNewAuthor(author);

    if (error) return constructError(error.details);

    return Authors.create(value);
  } catch (error) {
    return new Error(error.message);
  }
};

export const updateOne = async (authorID: string, authorUpdate: AuthorUpdateInterface) => {
  try {
    const { error, value } = validateUpdateAuthor(authorUpdate);

    if (error) return constructError(error.details);

    return await Authors.findByIdAndUpdate(authorID, value, { new: true }).exec();
  } catch (error) {
    return new Error(error.message);
  }
};

export const deleteOne = async (authorID: string) => {
  try {
    return await Authors.findByIdAndDelete(authorID).exec();
  } catch (error) {
    return new Error(error.message);
  }
};
