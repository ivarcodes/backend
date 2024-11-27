import mongoose from 'mongoose';
import { Timestamp } from './../../../node_modules/bson/src/timestamp';


const userSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    }


},{Timestamp:true})


export const User = mongoose.model("User",userSchema)