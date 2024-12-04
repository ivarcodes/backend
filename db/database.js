import mongoose from "mongoose";

const DB_URI = "mongodb://localhost:27017/practicep1";

const connectiontodb = ()=>{
    try{
        const conn = mongoose.connect(DB_URI);
        console.log("Db connection successful! ")
    }
    catch(error){
        console.log(error);
        process.exit(1) // if any error occurs the it will exit

        
    }
}
//lets export it

export default connectiontodb;