import { Request, Response, NextFunction } from 'express';
import * as OrderService from '../services/order.services';

export const listAllOrders = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await OrderService.listAllOrders();
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
};

export const lint = '';