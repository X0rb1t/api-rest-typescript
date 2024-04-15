// Import express
import express from 'express';
import { router } from '../routes/routers';
import 'dotenv/config';

const server = express();

server.use(express.json());
server.use(router);

export { server };