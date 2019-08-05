const {
  parsed: { SECRET_KEY }
} = require('dotenv').config();
import { Request } from 'express';
import { verify } from 'jsonwebtoken';
import { TokenInterface } from '../../typescriptTypes/types';

const checkRequestAuth = (req: Request): TokenInterface | any => {
  const token = req.header('x-auth-token');

  if (!token) throw new Error('Access denied, no token provided');

  try {
    return verify(token, SECRET_KEY);
  } catch (error) {
    throw new Error('Invalid Or Expired Token');
  }
};

export default checkRequestAuth;
