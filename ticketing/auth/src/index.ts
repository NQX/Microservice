import mongoose from 'mongoose';

import { app } from './app';


const start = async () => {

    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defeined');
    }

    try {
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('connected to mongodb')
    } catch (err) {
        console.log(err);
    }

    app.listen(3000, ()=> console.log('running on 3000'));
}

start();
