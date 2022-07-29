import * as UserModel from '../models/user.model';
import { createToken } from '../helpers/jwt';
import IUser from '../interfaces/IUser';

export const createUser = async (user: IUser): Promise<string> => {
  await UserModel.createUser(user);
  const token = createToken(user.username);
  return token;
};

export const lint = '';