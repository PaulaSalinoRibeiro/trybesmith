import { Request, Response, NextFunction } from 'express';
import IUser from '../interfaces/IUser';
import * as UserService from '../services/user.services';


export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.body as IUser

  const token = await UserService.createUser(user)

  res.status(201).json({token})
}