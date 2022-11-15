import { Request, Response } from 'express';
import { Order } from '../models/Order';

export async function changeOrderStatus(request: Request, response: Response) {
  const { orderId } = request.params;
  const { status } = request.body;
  const statusIsValid = ['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status);

  if (!statusIsValid) {
    return response.status(400).json({
      error: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE',
    });
  }

  await Order.findByIdAndUpdate(orderId, { status });
  response.sendStatus(204);
}
