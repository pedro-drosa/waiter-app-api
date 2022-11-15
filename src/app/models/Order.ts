import mongoose from 'mongoose';

const { Schema } = mongoose;
const OrderSchema = new Schema({
  table: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
    default: 'WAITING',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  products: {
    type: [
      {
        product: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: 'Products',
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    required: true,
  },
});

export const Order = mongoose.model('Order', OrderSchema);
