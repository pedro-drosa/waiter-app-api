import { Router } from 'express';
import { listCategories } from '../useCases/listCategories';
import { createCategory } from '../useCases/createCategory';

const categoryRouter = Router();

categoryRouter.get('/', listCategories);
categoryRouter.post('/', createCategory);

export default categoryRouter;
