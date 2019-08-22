import User from '../../models/user/User';
import { SignupUserInterface, UserUpdateInterface } from '../../typescriptTypes/types';

export const findAll = () => {
  return User.find().exec();
};

export const findOne = (user = {}) => {
  return User.findOne(user).exec();
};

export const create = (user: SignupUserInterface) => {
  return User.create(user);
};

export const updateOne = (userID: string, userUpdate: UserUpdateInterface) => {
  console.log(userID, userUpdate);

  return User.findOneAndUpdate({ _id: userID }, userUpdate, { new: true }).exec();
};

export const deleteOne = (userID: string) => {
  return User.findByIdAndDelete(userID).exec();
};
