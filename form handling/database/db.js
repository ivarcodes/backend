import mongoose from "mongoose";

const uri = "mongodb://localhost:27017/mydb"; 
const connectDB = async()=>{

    try{       //mongoose.connect take url , options
            const con = await mongoose.connect(uri,{
                useNewUrlParser: true, //uses new connection string parser
                useUnifiedTopology:true, //improves the connection , better performance
            });

            console.log("MongoDB Connected:",con.connection.host);
    }
    catch(error){
        console.error('error connecting to mongodb:',error.message);
        process.exit(1); //exits on failure to prevent the crash
    }

}

export default connectDB;