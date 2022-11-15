import { Router } from 'express';

import categoryRouter from './category.routes';
import productRouter from './product.routes';
import orderRouter from './order.routes';

const routes = Router();

routes.use('/categories', categoryRouter);
routes.use('/products', productRouter);
routes.use('/orders', orderRouter);

export default routes;
