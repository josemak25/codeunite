import { ErrorInterface } from '../typescriptTypes/types';

export const constructError = (error: ErrorInterface[]) => {
  return error.reduce<any>((acc, err) => {
    acc[err.path[0]] = err.message.replace(/"/g, '');
    return acc;
  }, {});
};
