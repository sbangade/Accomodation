import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const customersSchema = new Schema({
    placelist: [{
        type: Schema.Types.ObjectId,
        ref: 'place'
    }]
},{collection : 'registers'});