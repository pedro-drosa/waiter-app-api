import express from 'express';
import connectToDatabase from './database/mongo';

connectToDatabase();
const app = express();

export default app;
