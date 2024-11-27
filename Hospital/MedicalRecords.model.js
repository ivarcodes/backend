import mongoose from 'mongoose';
import { ObjectId } from './../../../node_modules/bson/src/objectid';


const MedicalRecordSchema = new mongoose.Schema({

    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"patient",
        required:true
    },
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'doctor',
        required:true
    },
    hospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'hospital',
        required:true
    },
    diagnosis:{
        type:String,
        required:true
    },
    treatment:{
        type:String,
        required:true,
    },
    recorddate:{
        type:Date,
        default:Date.now
    },
    prescription:{
        type:String,
    }

},{})


export const medicalRecord = mongoose.model("medicalrecord",MedicalRecordSchema)
