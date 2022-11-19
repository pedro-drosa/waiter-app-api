import express from 'express';
import http from 'node:http';
import { Server } from 'socket.io';
import connectToDatabase from './database/mongo';
import routes from './app/routes';
import enableCors from './middlewares/enableCors';
import { UPLOADS_PATH } from './config/multer';

connectToDatabase();
const app = express();
const server = http.createServer(app);
const io = new Server(server);
app.use(enableCors);
app.use('/uploads', express.static(UPLOADS_PATH));
app.use(express.json());
app.use(routes);

export { server, io };
