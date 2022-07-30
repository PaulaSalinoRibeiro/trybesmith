import { ResultSetHeader } from 'mysql2/promise';
import IProduct, { IProductsId } from '../interfaces/IProduct';
import connection from './connection';

export const createProduct = async (product: IProduct): Promise<IProduct> => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [product.name, product.amount],
  );

  const { insertId } = result;
  return { id: insertId, ...product } as IProduct;
};

export const listAllProduct = async (): Promise<IProduct[]> => {
  const [products] = await connection.execute(
    'SELECT * FROM Trybesmith.Products',
  );
  return products as IProduct[];
};

export const getIdProduct = async (id: number): Promise<IProductsId[]> => {
  const [result] = await connection.execute(
    'SELECT GROUP_CONCAT(id) as productsIds FROM Trybesmith.Products WHERE orderId = ?',
    [id],
  );
  return result as IProductsId[];
};
