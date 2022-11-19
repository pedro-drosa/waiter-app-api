import { Request, Response } from 'express';
import { Order } from '../models/Order';
import { io } from '../../app';

export async function createOrder(request: Request, response: Response) {
  const { table, products } = request.body;
  const order = await Order.create({ table, products });
  const orderDetails = await order.populate('products.product');
  io.emit('order@new', orderDetails);
  response.json(order);
}
