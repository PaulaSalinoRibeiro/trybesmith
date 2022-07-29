import IUser from "../interfaces/IUser";
import { ResultSetHeader } from "mysql2/promise";
import connection from './connection';

export const createUser = async (user: IUser): Promise<void> => {
  const { username, classe, level, password } = user
  await connection.execute<ResultSetHeader>(
    `INSERT INTO  Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)`,
    [username, classe, level, password]
  )
}