import joi from 'joi';
import * as OrderModel from '../models/order.model';
import * as ProductModel from '../models/product.model';
import { checkToken } from '../helpers/jwt';
import { throwError } from '../helpers/throwError';

import IOrder from '../interfaces/IOrder';
import { IProductsId, ProductsIds } from '../interfaces/IProduct';
import IUser from '../interfaces/IUser';

const keyValidated = (productsIds: ProductsIds): void => {
  const schema = joi.object().keys({
    productsIds: joi.required(),
  });
  const { error } = schema.validate(productsIds);
  if (error) return throwError('BadRequest', error.message);
};

const valuesValidated = (productsIds: ProductsIds): void => {
  const schema = joi.object({
    productsIds: joi.array().items((joi.number())).min(1).required()
      .messages(
        { 'array.min': '"productsIds" must include only numbers' },
      ),
  });
  const { error } = schema.validate(productsIds);
  if (error) return throwError('Unprocessable', error.message);
};

export const listAllOrders = async (): Promise<IOrder[]> => {
  const orders = await OrderModel.listAllOrder();

  const idProducts = await Promise.all(orders
    .map((order) => ProductModel.getIdProduct(order.id as number)));

  const ordersFormatted = idProducts.map((product: IProductsId[], index: number) => {
    const ids = product[0].productsIds.split(',');
    const covertId = ids.map((id) => +id);
    return { ...orders[index], productsIds: covertId };
  });

  return ordersFormatted as IOrder[];
};

export const updateOrder = async (
  productsIds: ProductsIds, 
  token: string | undefined,
): Promise<IOrder | void> => {
  if (!token) return throwError('Unauthorized', 'Token not found');

  const userData = checkToken(token);

  const { id } = userData as IUser;
  
  keyValidated(productsIds);

  valuesValidated(productsIds);

  const newOrder = await OrderModel.createOrder(id as number);
  
  await Promise.all(productsIds.productsIds
    .map((product: number) => ProductModel.updateProduct(newOrder.id as number, product)));

  return { userId: id as number, productsIds: productsIds.productsIds };
};