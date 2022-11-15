import { Router } from 'express';
import { listOrders } from '../useCases/listOrders';

const orderRouter = Router();

orderRouter.get('/', listOrders);

export default orderRouter;
