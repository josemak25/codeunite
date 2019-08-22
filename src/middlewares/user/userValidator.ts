import Joi from 'joi';
import {
  ErrorInterface,
  SignupUserInterface,
  UserUpdateInterface
} from '../../typescriptTypes/types';

const CreateUserSchema = {
  name: Joi.string()
    .min(3)
    .max(150)
    .required(),

  email: Joi.string()
    .email({
      minDomainAtoms: 2
    })
    .required(),

  password: Joi.string()
    .min(6)
    .max(25)
    .required()
};

const UpdateUserSchema = {
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

export const validateUserSignup = (user: SignupUserInterface) => {
  return Joi.validate(user, CreateUserSchema, {
    abortEarly: false,
    stripUnknown: true,
    skipFunctions: true
  });
};

export const validateUserUpdate = (user: UserUpdateInterface) => {
  if (!Object.keys(user).length) {
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

  return Joi.validate(user, UpdateUserSchema, {
    abortEarly: false,
    stripUnknown: true,
    skipFunctions: true
  });
};
