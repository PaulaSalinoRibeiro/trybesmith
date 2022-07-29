import joi from 'joi';
import IProduct from '../interfaces/IProduct';
import * as ProductModel from '../models/product.model';
import { throwError } from '../helpers/throwError';

const validateProduct = (product: IProduct): void => {
  const schemaProduct = joi.object({
    name: joi.string().min(3).required(),
    amount: joi.string().min(3).required(),
  });

  const { error } = schemaProduct.validate(product);
  if (error) return throwError('Unprocessable', error.message);
};

const validateKeys = (product: IProduct): void => {
  const keysProduct = joi.object().keys({
    name: joi.required(),
    amount: joi.required(),
  });

  const { error } = keysProduct.validate(product);
  if (error) return throwError('BadRequest', error.message);
};

export const createProduct = async (product: IProduct): Promise<IProduct | void> => {
  validateKeys(product);

  validateProduct(product);

  const newProduct = await ProductModel.createProduct(product);
  return newProduct;
};

export const listAllProducts = async (): Promise<IProduct[]> => {
  const products = await ProductModel.listAllProduct();
  return products;
};
