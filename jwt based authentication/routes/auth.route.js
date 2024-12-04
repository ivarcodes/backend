import express from 'express'
const router = express.Router();
import { signup,login,logout, updateprofile } from '../controllers/auth.controllers.js';

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);
router.post('/updateprofile',updateprofile);




export default router;

//revise the bcrypt
//revise the jwt 
//cookie part
//cloundinary profilepic update option