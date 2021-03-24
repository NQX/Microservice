import express, { Request, Response } from 'express';
import { Ticket } from '../models/ticket';


const router = express.Router();


router.get('/api/tickets', async (req: Request, res: Response) => {
    const tickets = await Ticket.find({})

    console.log('list', tickets.length)
    res.send(tickets)
})


export { router as indexTicketRouter}