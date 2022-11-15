import { Router } from 'express';

import categoryRouter from './category.routes';
import productRouter from './product.routes';

const routes = Router();

routes.use('/categories', categoryRouter);
routes.use('/products', productRouter);

export default routes;
