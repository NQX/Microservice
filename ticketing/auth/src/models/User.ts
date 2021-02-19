import mongoose from 'mongoose';
import { Password } from '../services/password';


// An interface that descripes the properties for typescript
interface UsersAttrs {
    email: string;
    password: string;
}

// an interface for static methods
interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UsersAttrs): any;
}

// an interface that descripes the properties
interface UserDoc extends mongoose.Document {
    email: string;
    password: string;
}



const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', async function(done) {
    if (this.isModified('password')) {
        const hashed = await Password.toHash(this.get('password'));
        this.set('password', hashed);
    }
    done();
});


userSchema.statics.build = (attrs: UsersAttrs) => {
    return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);


export { User };
