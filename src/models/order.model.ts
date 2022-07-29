import connection from './connection';
import IOrder from '../interfaces/IOrder';

export const listAllOrder = async (): Promise<IOrder[]> => {
  const [orders] = await connection.execute(`
  SELECT 
    t1.id, t1.userId, t2.orderId AS productsIds
  FROM
    Trybesmith.Orders AS t1
        INNER JOIN
    Trybesmith.Products AS t2 ON t1.id = t2.orderId
  GROUP BY t1.id;
  `);
  return orders as IOrder[];
};

export const lint = '';