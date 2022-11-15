import { Router } from 'express';
import { listProducts } from '../useCases/listProducts';

const productRouter = Router();

productRouter.get('/', listProducts);

export default productRouter;
