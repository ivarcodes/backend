import mongoose from 'mongoose';
import { ObjectId } from './../../../node_modules/bson/src/objectid';
import { hospital } from './Hospital.model';
const PatientSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
diagonsedwith:{
    type:String,
    required:true
},
address:{
    type:String,
    required:true
},
bloodgroup:{
    type:String,
    required:true
},gender:{
    type:String,
    enum:["M","F","O"],
    required:true
},
admittedhospital:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"hospital"
}

},{timestamp:true})


export default Patient = mongoose.model("patient",PatientSchema)