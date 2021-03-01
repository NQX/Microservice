import express, {request, response} from 'express';
import{ requireAuth } from '@nqx1/common';



const router = express.Router();

router.post('/api/tickets', requireAuth, (req: Request, res: Response) => {
    res.sendStatus(200);
});


export { router as createTicketRouter }