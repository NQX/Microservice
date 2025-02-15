import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { app } from './app';

import { natsWrapper } from './nats-wrapper';


 //TODO only for debug
 dotenv.config({ path: __dirname + '/../.env'})

const start = async () => {

    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defeined');
    }

    if(!process.env.MONGO_URI) {
        throw new Error('MONGO_URI must be defined');
    }

    if(!process.env.NATS_CLIENT_ID) {
        throw new Error('NATS_CLIENT_ID must be defined');
    }
    if(!process.env.NATS_URL) {
        throw new Error('NATS_URL must be defined');
    }
    if(!process.env.NATS_CLUSTER_ID) {
        throw new Error('NATS_CLUSTER_ID must be defined');
    }


    try {
        await natsWrapper.connect(process.env.NATS_CLUSTER_ID, process.env.NATS_CLIENT_ID, process.env.NATS_URL);
        natsWrapper.client.on('close', () => {
            console.log('NATS connection closed');
            process.exit();
        });
        process.on('SIGINT', () => natsWrapper.client.close());
        process.on('SIGTERM', () => natsWrapper.client.close());

        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('connected to mongodb')
    } catch (err) {
        console.log(err);
    }

    app.listen(3003, ()=> console.log('running on 3003'));
}

start();
 