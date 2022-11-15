import { Request, Response } from 'express';
import { Product } from '../models/Product';

export async function createProduct(request: Request, response: Response) {
  const imageReceived = request.file;
  const { name, description, price, ingredients, category } = request.body;
  const product = await Product.create({
    name,
    description,
    imagePath: imageReceived?.filename,
    price: Number(price),
    ingredients: ingredients ? JSON.parse(ingredients) : [],
    category,
  });
  return response.status(201).json(product);
}
