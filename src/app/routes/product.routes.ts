import { Router } from 'express';
import { listProducts } from '../useCases/listProducts';
import { createProduct } from '../useCases/createProduct';
import { upload } from '../../config/multer';

const productRouter = Router();

productRouter.get('/', listProducts);
productRouter.post('/', upload.single('image'), createProduct);

export default productRouter;
