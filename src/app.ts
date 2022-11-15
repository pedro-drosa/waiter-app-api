import express from 'express';
import connectToDatabase from './database/mongo';
import routes from './app/routes';

connectToDatabase();
const app = express();
app.use(routes);

export default app;
