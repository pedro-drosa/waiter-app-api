import mongoose from 'mongoose';
const { Schema } = mongoose;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

export const Category = mongoose.model('Category', CategorySchema);
