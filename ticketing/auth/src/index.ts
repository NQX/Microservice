import mongoose from 'mongoose';
//import dotenv from 'dotenv'; 
import { app } from './app';


const start = async () => {

    //TODO only for debug
    //dotenv.config({ path: __dirname + '/../.env'})

    

    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defeined');
    }

    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI must be defined')
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('connected to mongodb')
    } catch (err) {
        console.log(err);
    }

    app.listen(3001, ()=> console.log('running on 3001'));
}

start();
 