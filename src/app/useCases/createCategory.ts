import { Request, Response } from 'express';
import { Category } from '../models/Category';

export async function createCategory(request: Request, response: Response) {
  const { name, icon } = request.body;
  const category = await Category.create({ name, icon });
  response.status(201).json(category);
}
