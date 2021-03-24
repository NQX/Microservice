import mongoose from 'mongoose';


interface TicketAttrs {
    title: string;
    shortText: string;
    longText: string;
    price: number;
    features: string[];
    description: string;
    address: string;
    mainImage: string;
    images: Array<IImage>;
    long_address: IAddress;
    rating: number;
    userId: string;
}

interface TicketDoc extends mongoose.Document {
    title: string;
    shortText: string;
    longText: string;
    price: number;
    features: string[];
    desciption: string;
    address: string;
    mainImage: string;
    images: Array<IImage>;
    long_address: IAddress;
    rating: number;
    userId: string;
}

interface TicketModel extends mongoose.Model<TicketDoc> {
    build(attrs: TicketAttrs): TicketDoc;
}

interface IImage {
    url: string,
    name: string
}

interface IAddress {
    city: string,
    street: string,
    houseNumber: number,
    zip: number,
    coutry: string,
    lon: number,
    lat: number
}


const addressSchema = new mongoose.Schema({
    city: String,
    street: String,
    houseNumber: Number,
    zip: Number,
    coutry: String,
    lon: Number,
    lat: Number
});


const ticketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    shortText: {
        type: String,
        required: false
    },
    longText: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    features: {
        type: [String]
    },
    description: {
        type: String,
        required: false
    },
    address: {
        type:  String,
        required: false
    },
    mainImage: {
        type: String,
        required: false
    },
    images: [{
        image:
            {
                url: String,
                text: String
            }
    }],
    long_address: addressSchema,
    rating: {
        type: Number,
        required: false
    },
    userId: {
        type: String,
        required: true
    }
},
{
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;

        }
    }
});


ticketSchema.statics.build = (attrs: TicketAttrs) => {
    console.log('here in build')
    return new Ticket(attrs)
}

const Ticket = mongoose.model<TicketDoc, TicketModel>('Ticket', ticketSchema);


export { Ticket };

