import { Request, Response } from 'express';
import { Product } from '../models/Product';

export async function listProductsByCategory(
  request: Request,
  response: Response,
) {
  const { categoryId } = request.params;
  const products = await Product.find().where('category').equals(categoryId);
  return response.json(products);
}
