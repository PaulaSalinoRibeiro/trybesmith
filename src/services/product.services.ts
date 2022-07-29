import IProduct from '../interfaces/IProduct';
import * as ProductModel from '../models/product.model';

export const createProduct = async (product: IProduct): Promise<IProduct> => {
  const newProduct = await ProductModel.createProduct(product);
  return newProduct;
};

export const listAllProducts = async (): Promise<IProduct[]> => {
  const products = await ProductModel.listAllProduct();
  return products;
};
