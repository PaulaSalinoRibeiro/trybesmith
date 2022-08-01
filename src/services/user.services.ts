import joi from 'joi';
import { throwError } from '../helpers/throwError';
import * as UserModel from '../models/user.model';
import { createToken } from '../helpers/jwt';
import IUser from '../interfaces/IUser';

const keysValidated = (data: IUser): void => {
  const schema = joi.object().keys({
    username: joi.required(),
    classe: joi.required(),
    level: joi.required(),
    password: joi.required(),
  });

  const { error } = schema.validate(data);
  if (error) throwError('BadRequest', error.message);
};

const valuesValidate = (data: IUser): void => {
  const schema = joi.object({
    username: joi.string().min(3).required(),
    classe: joi.string().min(3).required(),
    level: joi.number().min(1).required(),
    password: joi.string().min(8).required(),
  });

  const { error } = schema.validate(data);
  if (error) throwError('Unprocessable', error.message);
};

export const createUser = async (user: IUser): Promise<string> => {
  keysValidated(user);
  valuesValidate(user);

  const newuser = await UserModel.createUser(user);
  const token = createToken(newuser);
  return token;
};

export const lint = '';