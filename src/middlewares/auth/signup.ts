import bcrypt from 'bcryptjs';
import Jwt from 'jsonwebtoken';
import { validateNewAuthor } from '../../middlewares/authors/authorValidator';
import { constructError } from '../../utils/utilities';

const {
  parsed: { SECRET_KEY }
} = require('dotenv').config();

import { createAuthor, findOneAuthor } from '../../models/authors/authors_crud';

import { SignupAuthorInterface } from '../../typescriptTypes/types';

const signupAuthor = async (author: SignupAuthorInterface) => {
  try {
    const { error, value } = validateNewAuthor(author);

    if (error) {
      return new Error(JSON.stringify(constructError(error.details)));
    }

    const exitingUser = await findOneAuthor({ email: value.email });

    if (exitingUser) {
      return new Error('Email Already Existing');
    }

    value.password = await bcrypt.hash(value.password, 10);
    const response = await createAuthor(value);

    const tokenObject = { id: response._id, email: response.email };

    const token = Jwt.sign(tokenObject, SECRET_KEY, { expiresIn: '1h' });

    return {
      ...tokenObject,
      token
    };
  } catch (error) {
    return new Error(error.message);
  }
};

export default signupAuthor;
