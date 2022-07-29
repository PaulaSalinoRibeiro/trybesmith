import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IUser from '../interfaces/IUser';

export const createUser = async (user: IUser): Promise<void> => {
  const { username, classe, level, password } = user;
  await connection.execute<ResultSetHeader>(
    `INSERT INTO  Trybesmith.Users (username, classe, level, password)
     VALUES (?, ?, ?, ?)`,
    [username, classe, level, password],
  );
};

export const listAllUser = async (): Promise<IUser[]> => {
  const [users] = await connection.execute(
    'SELECT * FROM Trybesmith.Users',
  );

  return users as IUser[];
};

export const checkLogin = async (user: IUser): Promise<IUser> => {
  const [result] = await connection.execute(
    'SELECT id, username FROM Trybesmith.Users WHERE username=? AND password=?',
    [user.username, user.password],
  );
  const [userLogin] = result as IUser[];
  return userLogin;
};
