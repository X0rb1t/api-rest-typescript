// Import express
import express from 'express';

const server = express();
const port = 3000;

server.get('/', (req, res) => {
  res.send({ message: 'Hello World!' });
});

export { server, port };