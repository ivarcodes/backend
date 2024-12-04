import bcrypt  from 'bcrypt';
import { user } from '../models/user.model.js';
import { generatetoken } from '../utils/utils.js';
export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }

        const finduser = await user.findOne({ email });
        if (finduser) {
            return res.status(400).json({ message: "The email already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(password, salt);

        const newuser = await user.create({
            fullname,
            email,
            password: hashpass,
        });

        if (newuser) {
            generatetoken(newuser._id, res);

            res.status(201).json({
                data: {
                    _id: newuser._id,
                    fullname: newuser.fullname,
                    email: newuser.email,
                    profilepic: newuser.profilepic || null,
                }
            });
        } else {
            res.status(500).json({ message: "Internal server error occurred" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error occurred while creating the user" });
    }
};
export const login = async(req,res)=>{
 try{
    const {email,password} = req.body;
    const usr = await user.findOne({email})

    if(!usr){
        return res.status(400).json("Invalid credentials!")
    }
    const ispassword = await bcrypt.compare(password,usr.password);
        if(!ispassword){
            return res.status(400).json("Invalid credentials!")

        }
        generatetoken(usr._id,res)

        res.status(200).json({
            _id:usr._id,
            fullname:usr.fullname,
            email:usr.email,
            profilepic:usr.profilepic
        })

 }
 catch(error){
     res.status(500).json("Internal error");

 }
}
export const logout = (req,res)=>{
    try{
            res.cookie("jwt",{maxAge:0})
            res.status(200).json({message:"log out Successful"})
    }
    catch(error){
            console.log("Error in logout Controller",error.message)
             res.status(500).json("Internal error");

    }
}

export const updateprofile = (req,res)=>{
    res.status(200);
}