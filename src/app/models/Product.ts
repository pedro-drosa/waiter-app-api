import mongoose from 'mongoose';

const { Schema } = mongoose;
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ingredients: {
    type: [
      {
        icon: String,
        name: Date,
      },
    ],
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
});

export const Product = mongoose.model('Product', ProductSchema);
