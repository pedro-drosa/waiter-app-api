import { Router } from 'express';
import { listCategories } from '../useCases/listCategories';

const categoryRouter = Router();

categoryRouter.get('/', listCategories);

export default categoryRouter;
