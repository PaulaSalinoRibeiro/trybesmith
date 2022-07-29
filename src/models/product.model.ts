import IProduct from "../interfaces/IProduct";
import { ResultSetHeader } from "mysql2/promise";
import connection from './connection';

export const createProduct = async(product: IProduct): Promise<IProduct> => {
  const [result] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)`,
    [product.name, product.amount]
  );

  const {insertId} = result

  return { id: insertId, ...product} as IProduct
}

export const listAllProduct = async(): Promise<IProduct[]> => {
  const [products] = await connection.execute(
    `SELECT * FROM  Trybesmith.Products`
  )

  return products as IProduct[]
}