import Jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import { findOneAuthor } from '../../models/authors/authors_crud';
import { AuthorUpdateInterface } from '../../typescriptTypes/types';

const signinAuthor = async (user: AuthorUpdateInterface, rest: object) => {
  const author = await findOneAuthor({ email: user.email });

  return author;
};

export default signinAuthor;
