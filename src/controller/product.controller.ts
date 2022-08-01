import { Request, Response, NextFunction } from 'express';
import IProduct from '../interfaces/IProduct';
import * as ProductService from '../services/product.services';

export const createProduct = async (
  req: Request, 
  res: Response, 
  next: NextFunction,
): Promise<Response | void> => {
  try {
    const product = req.body as IProduct;
    const addProduct = await ProductService.createProduct(product);
    return res.status(201).json({ ...addProduct });
  } catch (err) {
    next(err);
  }
};

export const listAllProduct = async (
  _req: Request, 
  res: Response, 
  next: NextFunction,
): Promise<Response | void> => {
  try {
    const products = await ProductService.listAllProducts();
    return res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};
