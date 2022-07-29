import { Router } from 'express';
import * as LoginController from '../controller/login.controller';

const login = Router();

login.post('/', LoginController.login);

export default login;
