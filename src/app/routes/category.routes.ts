import { Router } from 'express';

const categoryRouter = Router();

categoryRouter.get('/', (req, res) => res.send('nodejs'));

export default categoryRouter;
