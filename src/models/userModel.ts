import { Pool, ResultSetHeader } from 'mysql2/promise';
// import connection from './connection';
import { IUser } from '../interfaces/IUser';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createUser(user: IUser): Promise<IUser> {
    const { username, classe, level, password } = user;
  
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password) 
      VALUES (?, ?, ?, ?)`;
    const values = [username, classe, level, password];
  
    const [result] = await this.connection.execute<ResultSetHeader>(query, values);
    const { insertId: id } = result;
  
    const newUser: IUser = { id, username, classe, level, password };
    return newUser;
  }
}
