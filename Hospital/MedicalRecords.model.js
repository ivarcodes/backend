import mongoose from 'mongoose';


const MedicalRecordSchema = new mongoose.Schema({

},{})


export const medicalRecord = mongoose.model("medicalrecord",MedicalRecordSchema)