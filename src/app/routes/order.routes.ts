import { Router } from 'express';
import { listOrders } from '../useCases/listOrders';
import { createOrder } from '../useCases/createOrder';
import { changeOrderStatus } from '../useCases/ChangeOrderStatus';
import { cancelOrder } from '../useCases/cancelOrder';

const orderRouter = Router();

orderRouter.get('/', listOrders);
orderRouter.post('/', createOrder);
orderRouter.patch('/:orderId', changeOrderStatus);
orderRouter.delete('/:orderId', cancelOrder);

export default orderRouter;
