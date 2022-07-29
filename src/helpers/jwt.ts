import jwt, { SignOptions, Secret  } from 'jsonwebtoken';
import IUser from '../interfaces/IUser';
import 'dotenv/config'

const jwtConfig: SignOptions = { expiresIn: '30d' }

const SECRET: Secret = process.env.JWT_SECRET!;
  
export const createToken = (data: Omit<IUser, 'password'>): string => {
  const token = jwt.sign(data, SECRET, jwtConfig)

  return token
}