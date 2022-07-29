import * as OrderModel from '../models/order.model';
import IOrder from '../interfaces/IOrder';

export const listAllOrders = async (): Promise<IOrder[]> => {
  const orders = await OrderModel.listAllOrder();
  return orders;
};

export const lint = '';