import { findAllAuthors } from '../../models/authors/authors_crud';
import { AuthorUpdateInterface } from '../../typescriptTypes/types';

const signinAuthor = async (user: AuthorUpdateInterface) => {
  const author = findAllAuthors({ email: user.email });
};

export default signinAuthor;
