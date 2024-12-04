import mongoose  from "mongoose";
import { User } from "./user.model.js";
//lets import the usermodel



const postSchema = new mongoose.Schema({
        //we need username -done , image for post-done , description little bit..so let's start doing

        username:{
            //for username we can use the same username from the model created earlier
            type:mongoose.Schema.Types.ObjectId, // this how u can refer the other models ..now give reference
            ref:"User",
            required:true
        },
        image:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        }
        ,
        desc :{
            type:String,
            required:true
        },
        createdAt:{ //to know when post was created 
                type:Date,
                default:Date.now
        },
        updatedAt:{
            type:Date,
            default:Date.now
        }

},{timestamps:true}) //timestamps contains createdtime,updatedtime
//export now

export const post = mongoose.model("post",postSchema);