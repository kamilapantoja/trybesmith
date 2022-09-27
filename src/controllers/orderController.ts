import { Request, Response, NextFunction } from 'express';
import OrderService from '../service/orderService';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getOrders = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const orders = await this.orderService.getOrders();
      res.status(200).json(orders);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}