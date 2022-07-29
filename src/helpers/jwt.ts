import jwt, { SignOptions, Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const jwtConfig: SignOptions = { expiresIn: '30d' };

const SECRET: Secret = process.env.JWT_SECRET || 'UmSegredoQualquer';
  
export const createToken = (username: string): string => {
  const token = jwt.sign({ username }, SECRET, jwtConfig);
  return token;
};

// export const checkToken = (token: string) => {
//   try {
//     const data = jwt.verify(token, SECRET);
//     return data;
//   } catch (err) {
//     return false;
//   }
// };

export const lint = '';