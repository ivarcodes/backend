import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    fullname:{
        type:String,
        required:true
    },
    password:{

        type:String,
        required:true,
        minlength:[6,'please enter password more than 6 character']
    },
    profilepic:{
        type:String,
        default:""
    }
},{timestamps:true})

export const user = mongoose.model("user",userSchema);