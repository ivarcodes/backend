import jwt from "jsonwebtoken";

function SignToken(payload,secretkey="samplekeyishere",options={expiresIn:'7d'}){
     
     
    try{
           const token =  jwt.sign(payload,secretkey,options);
            return token;
    }
    catch(error){
        console.error("Error signing token:", error);

        return null;
    }
}

function verfiytoken(token,secretkey="samplekeyishere"){
    
    try{
       const decoded =      jwt.verify(token,secretkey)
       return decoded;
    }
    catch(error){
        return null;
    }
}

export {SignToken,verfiytoken};