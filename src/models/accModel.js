//import { ObjectID } from 'bson';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const accmSchema = new Schema({
    title: {
        type: String,
        required: 'Enter your title'
    },
    price: {
        type: Number,
        required: 'Enter price'
    },
    date: {
        type: Date,
        default: Date.now
    },
    images:{
        type: String
    },
    description: {
        type: String,
       required: 'Enter your description'
    },
    address: {
        type: String,
        required: 'Enter your address'
    },
    city: {
        type: String,
        required: 'Enter your address'
    },
    province: {
        type: String,
        required: 'Enter your address'
    },
    bedroom: {
        type: Number,
        required: 'Enter number of bedroom'
    },
    bathroom: {
        type: Number,
        required: 'Enter number of bathroom'
    },
    utilities:{
        type: String,
        required: 'Enter if utilities are included'
    },
    wifi: {
        type: String,
        required: 'Enter if utilities are included'
    },
    parking: {
        type: String,
        required: 'Enter number of parking place available'
    },
    aggrement_length: {
        type: String,
        required: 'Enter aggrement length'
    },
    move_in: {
        type: Date,
        required: 'Enter move in date'
    },
    pet: {
        type: String,
        required: 'Is pet allowed'
    },
    size: {
        type: String,
        required: 'Enter size of house in sqft'
    },
    furnished: {
        type: String,
        required: 'Enter is house furnished'
    },
    appliances: {
        type: String,
        required: 'Enter appliances'
    },
    smoking_permitted: {
        type: String,
        required: 'Enter if smoking permitted'
    },
    deleted:{
        type: Boolean,
        default: false
    },
    poster: {
        type: Schema.Types.ObjectId,
        ref: 'customer'
    }
    
});