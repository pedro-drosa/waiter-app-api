import { Router } from 'express';
import { listOrders } from '../useCases/listOrders';
import { createOrder } from '../useCases/createOrder';

const orderRouter = Router();

orderRouter.get('/', listOrders);
orderRouter.post('/', createOrder);

export default orderRouter;
