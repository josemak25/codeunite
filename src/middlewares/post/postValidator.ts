import Joi from 'joi';
import { ErrorInterface, PostUpdateInterface, PostInterface } from '../../typescriptTypes/types';

const CreatePostSchema = {
  title: Joi.string()
    .min(5)
    .max(150)
    .required(),

  author_id: Joi.string()
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

  category: Joi.string()
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

export const validateNewPost = (post: PostInterface) => {
  return Joi.validate(post, CreatePostSchema, {
    abortEarly: false,
    stripUnknown: true,
    skipFunctions: true
  });
};

export const validateUpdatePost = (post: PostUpdateInterface) => {
  if (!Object.keys(post).length) {
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

  return Joi.validate(post, UpdatePostSchema, {
    abortEarly: false,
    stripUnknown: true,
    skipFunctions: true
  });
};
