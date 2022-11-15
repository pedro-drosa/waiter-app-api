import { Request, Response } from 'express';
import { Order } from '../models/Order';

export async function createOrder(request: Request, response: Response) {
  const { table, products } = request.body;
  const order = await Order.create({
    table,
    products,
  });
  response.json(order);
}
