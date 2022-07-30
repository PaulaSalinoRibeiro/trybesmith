import * as OrderModel from '../models/order.model';
import * as ProductModel from '../models/product.model';
import IOrder from '../interfaces/IOrder';
import { IProductsId } from '../interfaces/IProduct';

export const listAllOrders = async (): Promise<IOrder[]> => {
  const orders = await OrderModel.listAllOrder();

  const idProducts = await Promise.all(orders
    .map((order) => ProductModel.getIdProduct(order.id)));

  const ordersFormatted = idProducts.map((product: IProductsId[], index: number) => {
    const ids = product[0].productsIds.split(',');
    const covertId = ids.map((id) => +id);
    return { ...orders[index], productsIds: covertId };
  });

  return ordersFormatted as IOrder[];
};

export const lint = '';