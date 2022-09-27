import { Pool } from 'mysql2/promise';
import { IOrder } from '../interfaces/IOrder';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getOrders() {
    const query = `SELECT O.id, O.userId, JSON_ARRAYAGG(P.id) AS productsIds
        FROM Trybesmith.Orders AS O
        INNER JOIN Trybesmith.Products AS P
        ON P.orderId = O.id
        GROUP BY O.id
        ORDER BY O.userId;`;
    const [result] = await this.connection.execute(query);
    return result as IOrder[];
  }
}
