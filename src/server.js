import express from 'express';
import UserController from './app/controllers/UserController';
import { createBullBoard } from 'bull-board';
import { BullAdapter } from 'bull-board/bullAdapter'

import Queue from './app/lib/Queue';

const app = express();
const { router, setQueues } = createBullBoard(Queue.queues.map(queue => new BullAdapter(queue.bull)))


app.use(express.json())
app.use('/admin/queues', router);


app.post('/user',UserController.store);

app.listen(3334,() => {
    console.log('Server running on 3334');
})