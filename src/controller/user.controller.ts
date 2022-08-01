import { Request, Response, NextFunction } from 'express';
import IUser from '../interfaces/IUser';
import * as UserService from '../services/user.services';

export const createUser = async (
  req: Request, 
  res: Response, 
  next: NextFunction,
) : Promise<Response | void> => {
  const user = req.body as IUser;
  try {
    const token = await UserService.createUser(user);
    return res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

export const lint = '';