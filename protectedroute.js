import { verfiytoken } from "./utils.js";

const protectedroute = (req,res,next)=>{
                    //contains the authorization token from the res
    const token = req.headers.authorization?.split('')[1]; //1 represent the 1st val

    if(!token){
        res.status(400).json({
            message:"No token provided"
        });
        const decoded = verfiytoken(token);
        if(!decoded){
            return res.status(401).json({
                message:"Invalid or expired token"
            })
            req.userId = decoded.userId;
            next();
        }
    }



}

export default protectedroute;