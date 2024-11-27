import mongoose from 'mongoose';
import { category } from './Category.model';

const ProductSchema = new mongoose.Schema({

    description:{
    type:String,
    required:true
  },
  name:{
    type:String,
    required:true
  },
  productImage:{
    type:String,
    required:true
  },
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"category"
  },price:{
    type:Number,
    required:true
  }

},{timestamps:true})


export const product = new mongoose.model("product",ProductSchema)