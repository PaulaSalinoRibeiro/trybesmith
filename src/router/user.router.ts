import { Router } from 'express';
import * as UserController from '../controller/user.controller';

const user = Router();

user.post('/', UserController.createUser);

export default user;
