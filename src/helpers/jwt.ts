import jwt, { SignOptions, Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { throwError } from './throwError';

import IUser, { User } from '../interfaces/IUser';

dotenv.config();

const jwtConfig: SignOptions = { expiresIn: '30d' };

const SECRET: Secret = process.env.JWT_SECRET || 'UmSegredoQualquer';
  
export const createToken = (user: Omit<IUser, 'password'>): string => {
  const token = jwt.sign({ user }, SECRET, jwtConfig);
  return token;
};

export const checkToken = (token: string): IUser | void => {
  try {
    const payload = jwt.verify(token, SECRET);
    const { user } = payload as User;
    return user;
  } catch (err) {
    throwError('Unauthorized', 'Invalid token');
  }
};
