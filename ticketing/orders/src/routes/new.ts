import mongoose from 'mongoose';
import express, { Request, Response } from 'express';
import { requireAuth, validateRequest } from '@nqx1/common';
import { body } from 'express-validator';

const router = express.Router();


router.get('/api/orders', requireAuth, [
    body('ticketId')
        .not()
        .isEmpty()
        .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
        .withMessage('TicketId myst be provided')
], validateRequest, async (req: Request, res: Response) => {
    res.send({});
});


export { router as newOrderRouter };