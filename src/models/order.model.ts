import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IOrder from '../interfaces/IOrder';

export const listAllOrder = async (): Promise<IOrder[]> => {
  const [orders] = await connection.execute(`
  SELECT id, userId FROM Trybesmith.Orders
  `);
  return orders as IOrder[];
};

export const createOrder = async (userId: number): Promise<IOrder> => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
    [userId],
  );
  const { insertId } = result;
  return { id: insertId, userId } as IOrder;
};