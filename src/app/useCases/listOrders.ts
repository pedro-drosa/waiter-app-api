import { Request, Response } from 'express';
import { Order } from '../models/Order';

export async function listOrders(request: Request, response: Response) {
  const orders = await Order.find();
  response.json(orders);
}
