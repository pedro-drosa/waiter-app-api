import mongoose from 'mongoose';

const DB_URL = 'mongodb://localhost:27017';

async function connectToDatabase() {
  try {
    await mongoose.connect(DB_URL);
    console.log('🟢 Connected to mongodb database.');
  } catch (error) {
    throw new Error('🔴 Error connecting to mongodb database!');
  }
}

export default connectToDatabase;
