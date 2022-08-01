import { Router } from 'express';
import * as OrderController from '../controller/order.controller';

const order = Router();

order.get('/', OrderController.listAllOrders);

order.post('/', OrderController.createOrder);

export default order;