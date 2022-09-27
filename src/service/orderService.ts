import connection from '../models/connection';
import OrderModel from '../models/orderModel';

export default class OrderService {
  public orderModel: OrderModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
  }

  public async getOrders() {
    const orders = await this.orderModel.getOrders();
    return orders;
  }
}