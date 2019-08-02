import bcrypt from 'bcryptjs';

import { findOneAuthor } from '../../models/authors/authors_crud';
import { SignupAuthorInterface, ICreateUserInput } from '../../typescriptTypes/types';
import { validateSigninInput } from '../../utils/utilities';

const signinAuthor = async (author: SignupAuthorInterface, rest: object) => {
  const emptyFields = validateSigninInput(author);

  if (Object.keys(emptyFields).length) return new Error(JSON.stringify(emptyFields));

  const userFound: ICreateUserInput = await findOneAuthor({ email: author.email });

  if (!userFound) return new Error('Email is invalid');

  const validPassword = await bcrypt.compare(author.password, userFound.password);

  if (!validPassword) return new Error('Password is incorrect ');

  const token = userFound.generateAuthToken();

  const { _id: id, name, email } = userFound;

  return {
    ...{ id, name, email },
    token
  };
};

export default signinAuthor;
