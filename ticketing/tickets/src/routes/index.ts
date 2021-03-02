import express, { Request, Respones } from 'express';
import { Ticket } from '../models/ticket';


const router = express.Router();


router.get('/api/ticets', async (req: Request, res: Response) => {
    const ticktes = await Ticket.find({})

    res.send(ticktes)
})


export { router as indexTicketRouter}