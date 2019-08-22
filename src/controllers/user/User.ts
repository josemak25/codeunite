import { create, findOne, updateOne, deleteOne, findAll } from '../../queries/user/user.queries';
import bcryptService from '../../services/bcrypt.service';
import { SignupUserInterface } from '../../typescriptTypes/types';

export const signUp = async (author: SignupUserInterface) => {
  try {
    const exitingUser = await findOne({ email: author.email });

    if (exitingUser) {
      return new Error('Email Already Existing');
    }

    const user: any = await create(author);

    const token = user.generateAuthToken();

    const { _id: id, name, email } = user;
    return { id, name, email, token };
  } catch (error) {
    return new Error(error.message);
  }
};

export const signIn = async (author: SignupUserInterface) => {
  try {
    const user: any = await findOne({ email: author.email });

    if (!user) return new Error('Invalid email or password');

    const validPassword = await bcryptService().comparePassword(author.password, user.password);

    if (!validPassword) return new Error('Invalid email or password');

    const token = user.generateAuthToken();

    const { _id: id, name, email } = user;
    return { id, name, email, token };
  } catch (error) {
    return new Error(error.message);
  }
};

export const updateUser = (user: any) => {
  const { userID, ...payload } = user;
  return updateOne(userID, payload);
};

export const deleteUser = (userID: string) => {
  return deleteOne(userID);
};

export const findOneUser = (userID: string) => {
  return findOne({ _id: userID });
};

export const findAllUsers = () => {
  return findAll();
};
