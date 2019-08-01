import Joi from 'joi';
import {
  ErrorInterface,
  AuthorInterface,
  AuthorUpdateInterface
} from '../../typescriptTypes/types';

const CreateAuthorSchema = {
  name: Joi.string()
    .min(3)
    .max(150)
    .required(),

  email: Joi.string()
    .min(5)
    .max(80)
    .required(),

  password: Joi.string()
    .min(6)
    .max(25)
    .required()
};

const UpdateAuthorSchema = {
  name: Joi.string()
    .min(3)
    .max(150),

  email: Joi.string()
    .min(5)
    .max(80),

  password: Joi.string()
    .min(6)
    .max(25)
};

export const validateNewAuthor = (author: AuthorInterface) => {
  return Joi.validate(author, CreateAuthorSchema, {
    abortEarly: false,
    stripUnknown: true,
    skipFunctions: true
  });
};

export const validateUpdateAuthor = (author: AuthorUpdateInterface) => {
  if (!Object.keys(author).length) {
    const value: any = null;

    const errorObject: ErrorInterface = {
      message: "All Fields can't be empty",
      path: ['Body'],
      type: 'Error'
    };

    const error: any = {
      details: [errorObject]
    };

    return { error, value };
  }

  return Joi.validate(author, UpdateAuthorSchema, {
    abortEarly: false,
    stripUnknown: true,
    skipFunctions: true
  });
};
