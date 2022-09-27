import { Router } from 'express';
import OrderController from '../controllers/orderController';

const router = Router();

const orderController = new OrderController();

router.get('/', orderController.getOrders);

export default router;