import { Router } from 'express';
import {StatusCodes} from 'http-status-codes'
const router = Router();

router.get('/', (req, res) => {
  res.send({ message: 'Hello World!' });
});

router.post('/create', (req, res) => {
    res.status(StatusCodes.UNAUTHORIZED).send({ message: 'Create' });
});

router.put('/update', (req, res) => {
    console.log(req.query.teste);
    res.json({ message: 'Update' });
});

router.delete('/delete', (req, res) => {
    res.send({ message: 'Delete' });
});

export { router };