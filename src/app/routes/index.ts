import { Router } from 'express';

import categoryRouter from './category.routes';

const routes = Router();

routes.use('/categories', categoryRouter);

export default routes;
