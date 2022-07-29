import joi from 'joi';
import * as UserModel from '../models/user.model';
import { createToken } from '../helpers/jwt';
import IUser from '../interfaces/IUser';

const userSchema = joi.object({
  username: joi.string().required(),
  password: joi.string().required(),
});

const throwError = (name: string, message: string): void => {
  const e = new Error('Expired or invalid token');
  e.name = name;
  e.message = message;
  throw e;
};

export const login = async (user: IUser):Promise<string | void> => {
  const { error } = userSchema.validate(user);

  if (error) {
    throwError('BadRequest', error.message);
  }

  const userExist = await UserModel.checkLogin(user);
  if (!userExist) {
    throwError('Unauthorized', 'Username or password invalid');
  }
  
  const token = createToken(userExist.username);
  return token;
};

export const lint = '';