import bcrypt from 'bcryptjs';
import { validateNewAuthor } from '../../middlewares/authors/authorValidator';
import { constructError, validateSignupInput } from '../../utils/utilities';

import { createAuthor, findOneAuthor } from '../../models/authors/authors_crud';

import { SignupAuthorInterface, ICreateUserInput } from '../../typescriptTypes/types';

const signupAuthor = async (author: SignupAuthorInterface) => {
  try {
    const emptyFields = validateSignupInput(author);

    if (Object.keys(emptyFields).length) return new Error(JSON.stringify(emptyFields));

    const { error, value } = validateNewAuthor(author);

    if (error) {
      return new Error(JSON.stringify(constructError(error.details)));
    }

    const exitingUser = await findOneAuthor({ email: value.email });

    if (exitingUser) {
      return new Error('Email Already Existing');
    }

    value.password = await bcrypt.hash(value.password, 10);

    const result: ICreateUserInput = await createAuthor(value);

    const token = result.generateAuthToken();

    const { _id: id, name, email } = result;

    return {
      ...{ id, name, email },
      token
    };
  } catch (error) {
    return new Error(error.message);
  }
};

export default signupAuthor;
