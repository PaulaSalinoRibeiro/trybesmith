import jwt, { SignOptions, Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
import IUser from '../interfaces/IUser';

dotenv.config();

const jwtConfig: SignOptions = { expiresIn: '30d' };

const SECRET: Secret = process.env.JWT_SECRET || 'UmSegredoQualquer';
  
export const createToken = (data: Omit<IUser, 'password'>): string => {
  const token = jwt.sign(data, SECRET, jwtConfig);
  return token;
};

// export const checkToken = (token: string): boolean => {

// };

export const lint = '';