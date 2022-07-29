import connection from './connection';
import IOrder from '../interfaces/IOrder';

export const listAllOrder = async (): Promise<IOrder[]> => {
  const [orders] = await connection.execute(`
  SELECT * FROM Trybesmith.Orders
  `);
  return orders as IOrder[];
};

export const lint = '';