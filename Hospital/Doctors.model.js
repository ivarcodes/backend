import mongoose from 'mongoose';
import { ObjectId } from './../../../node_modules/bson/src/objectid';
import { hospital } from './Hospital.model';


const DoctorSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        qualification:{
            type:String,
            required:true
        },
        experience:{
            type:Number,
            default:1
        },
        Hospitals:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"hospital"
        }

},{timestamps:true})


export const doctor = mongoose.model("doctor",DoctorSchema)