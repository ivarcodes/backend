/*
you can create model using mongoose ..watch now
*/
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    //here you define whatever you want to store in db
    //fr now im going to store user data name,email,pass
    //make sure both names matches from the input and modelname

    username:{
        type:String,
        required:true, // u have to enter value else it will move forward
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true // to prevent duplicates in db

    },
    password:{
        type:String,
        required:true,
        minlength:[7,'minimum length for password is 7']
    }
})
//exporting it so we can use it somewhere

export const User = mongoose.model("User",userSchema)//this takes name and schema