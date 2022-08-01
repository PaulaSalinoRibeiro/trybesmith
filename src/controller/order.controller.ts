import { Request, Response, NextFunction } from 'express';
import * as OrderService from '../services/order.services';

import { ProductsIds } from '../interfaces/IProduct';

export const listAllOrders = async (
  _req: Request, 
  res: Response, 
  next: NextFunction,
): Promise<Response | void > => {
  try {
    const orders = await OrderService.listAllOrders();
    return res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
};

export const createOrder = async (
  req: Request,
  res: Response, 
  next: NextFunction,
): Promise<Response | void> => {
  try {
    const token: string | undefined = req.headers.authorization;
    const productsIds: ProductsIds = req.body;
    const result = await OrderService.updateOrder(productsIds, token);
    return res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};