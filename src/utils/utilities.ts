import { ErrorInterface, SignupUserInterface } from '../typescriptTypes/types';

export const constructError = (error: ErrorInterface[]) => {
  return error.reduce<any>((acc, err) => {
    acc[err.path[0]] = err.message.replace(/"/g, '');
    return acc;
  }, {});
};

export const validateSignupInput = ({ name, email, password }: any) => {
  const errors: any = {};
  if (name.trim() === '') {
    errors.name = 'Name cannot be empty';
  }
  if (email.trim() === '') {
    errors.email = 'Email cannot be empty';
  }
  if (password.trim() === '') {
    errors.password = 'Password cannot be empty';
  }
  return errors;
};

export const validateSigninInput = ({ email, password }: SignupUserInterface) => {
  const errors: any = {};

  if (email.trim() === '') {
    errors.email = 'Email cannot be empty';
  }
  if (password.trim() === '') {
    errors.password = 'Password cannot be empty';
  }
  return errors;
};
