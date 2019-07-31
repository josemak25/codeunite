import Joi from 'joi';
import { ErrorInterface, PostUpdateInterface, PostInterface } from '../../typescriptTypes/types';

const CreatePostSchema = {
  title: Joi.string()
    .min(5)
    .max(150)
    .required(),

  author: Joi.string()
    .max(24)
    .required(),

  description: Joi.string()
    .min(10)
    .max(150)
    .required(),

  thumbnail: Joi.string().min(5),

  link: Joi.string().min(3),

  content: Joi.string()
    .min(5)
    .required(),

  categories: Joi.string()
    .min(6)
    .max(50)
};

const UpdatePostSchema = {
  title: Joi.string()
    .min(5)
    .max(150),

  description: Joi.string()
    .min(10)
    .max(150),

  thumbnail: Joi.string().min(5),

  link: Joi.string().min(3),

  content: Joi.string().min(5),

  categories: Joi.string()
    .min(6)
    .max(50)
};

export const validateNewPost = (course: PostInterface) => {
  return Joi.validate(course, CreatePostSchema, {
    abortEarly: false,
    stripUnknown: true,
    skipFunctions: true
  });
};

export const validateUpdatePost = (course: PostUpdateInterface) => {
  if (!Object.keys(course).length) {
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

  return Joi.validate(course, UpdatePostSchema, {
    abortEarly: false,
    stripUnknown: true,
    skipFunctions: true
  });
};
