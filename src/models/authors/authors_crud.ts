import Authors from './authors';
import { authorUpdateInterface } from '../../typescriptTypes/types';

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
    return new Error(error.message);
  }
};

export const updateOne = async (authorID: string, authorUpdate: authorUpdateInterface) => {
  try {
    return await Authors.findByIdAndUpdate(authorID, authorUpdate, { new: true }).exec();
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
