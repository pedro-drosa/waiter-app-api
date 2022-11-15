import { Router } from 'express';
import { listOrders } from '../useCases/listOrders';
import { createOrder } from '../useCases/createOrder';
import { changeOrderStatus } from '../useCases/ChangeOrderStatus';

const orderRouter = Router();

orderRouter.get('/', listOrders);
orderRouter.post('/', createOrder);
orderRouter.patch('/:orderId', changeOrderStatus);

export default orderRouter;
