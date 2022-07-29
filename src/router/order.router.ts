import { Router } from 'express';
import * as OrderController from '../controller/order.controller';

const order = Router();

order.get('/', OrderController.listAllOrders);

export default order;