import mongoose from 'mongoose';
import { ObjectId } from './../../../node_modules/bson/src/objectid';
import { product } from './Product.model';
import { User } from './User.model';

const orderitemsSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product'
    },
    quantity:{
        
        type:Number,
        required:true
    }
})


const orderSchema = new mongoose.Schema({
    
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    orderItems:{
        type:[orderitemsSchema]
    },
    status:{
        type:String,
        enum:["PENDING","DELIVERED","CANCELLED"],
        default:"pending"
    },totalprice:{
        type:Number,
        required:true
    }

},{timestamps:true})




export const order = mongoose.model('order',orderSchema)
