import { Request, Response, NextFunction } from 'express';
import IUser from '../interfaces/IUser';
import * as LoginService from '../services/login.services';

export const login = async (
  req: Request, 
  res: Response, 
  next: NextFunction,
): Promise<Response | void> => {
  try {
    const user = req.body as IUser;
    const token = await LoginService.login(user);
    return res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

export const lint = '';