import express, { Request, Response } from 'express';
import{ requireAuth, validateRequest } from '@nqx1/common';
import { body } from 'express-validator';
import { Ticket } from '../models/ticket';



const router = express.Router();

// TODO dev only

router.post('/api/tickets', requireAuth, [
    body('title').not().isEmpty().withMessage('Title is required'),
    body('price').isFloat({ gt: 0 }).withMessage('Price must be greater than 0')


], 
validateRequest, 
async (req: Request, res: Response) => {
    const { title, shortText, longText, price, features, description, address, mainImage, images, long_address, rating } = req.body;
    const ticket = Ticket.build({
        title,
        shortText,
        longText,
        price,
        features,
        description,
        address,
        mainImage,
        images,
        long_address,
        rating,
        //userId: req.currentUser!.id //dev
        userId: 'dev'
    });

    //console.log('after build ', ticket)

    try {
        await ticket.save();
    } catch (err) {
        console.log('error in save', err)
        throw new Error('hilfe')
    }


    res.status(201).send(ticket);
    
});


export { router as createTicketRouter }