import joi from 'joi';
import * as UserModel from '../models/user.model';
import { createToken } from '../helpers/jwt';
import IUser from '../interfaces/IUser';
import { throwError } from '../helpers/throwError';

const userSchema = joi.object({
  username: joi.string().required(),
  password: joi.string().required(),
});

export const login = async (user: IUser):Promise<string | void> => {
  const { error } = userSchema.validate(user);

  if (error) {
    throwError('BadRequest', error.message);
  }

  const userExist = await UserModel.checkLogin(user);
  if (!userExist) {
    throwError('Unauthorized', 'Username or password invalid');
  }
  
  const token = createToken(userExist);
  return token;
};

export const lint = '';