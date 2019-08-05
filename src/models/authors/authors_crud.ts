import Authors from './authors';
import { SignupAuthorInterface, AuthorUpdateInterface } from '../../typescriptTypes/types';

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
    return await Authors.findOneAndUpdate({ _id: authorID }, authorUpdate, { new: true }).exec();
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
