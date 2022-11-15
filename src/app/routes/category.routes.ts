import { Router } from 'express';
import { listCategories } from '../useCases/listCategories';
import { createCategory } from '../useCases/createCategory';
import { listProductsByCategory } from '../useCases/listProductsByCategory';

const categoryRouter = Router();

categoryRouter.get('/', listCategories);
categoryRouter.post('/', createCategory);
categoryRouter.get('/:categoryId/products', listProductsByCategory);

export default categoryRouter;
