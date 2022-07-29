import { Request, Response, NextFunction } from 'express';
import IProduct from '../interfaces/IProduct';
import * as ProductService from '../services/product.services';

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = req.body as IProduct;
    const addProduct = await ProductService.createProduct(product);
    res.status(201).json({ ...addProduct });
  } catch (err) {
    next(err);
  }
};

export const listAllProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await ProductService.listAllProducts();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};
