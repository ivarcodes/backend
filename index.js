import express, { urlencoded } from 'express';
import bcrypt from 'bcrypt';
import connectiontodb from './db/database.js'; //extension warning
import {SignToken,verfiytoken} from './utils.js';
import protectedroute from './protectedroute.js';
import {post } from '../passdata/models/post.model.js';
import { User } from '../passdata/models/user.model.js';





const app = express();
//db connection
connectiontodb();
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;
app.get('/signup',(req,res)=>{
    res.render("signup")
})
app.get('/login',(req,res)=>{
    res.render("login")
})
app.get('/post',(req,res)=>{
    res.render('post')
})
app.post('/signup',async(req,res)=>{
    try{
        const {username,email,password} = req.body;
        //check if any fields are empty or not
        if(!username || !email || !password){
            return res.status(400).json({
                message:"Please fill all the required fields"
            })

        }
        if(password.length<6){
            return res.status(400).json({message:"minimum length for password is 7"})
        }
        //now let's hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPass =await bcrypt.hash(password,salt);

        //now let's create the user .. db done let's create model - a simple layout of something you are going to store in db
        //now we have db and model so let's create new entry inside db
        //ok first let's see if user already exists or not
        //im just checking if record exists or not 
        //findOne is used to find records from db in mongodb

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                message:"the user already exists!"
            })

        }
        //now time to create new user in db
        const newUser = await User.create({
            username,
            email,
            password:hashedPass  //for password lets save hashedpass
        })
        //now let's return the res to user
        res.status(201).json({
            message:"user created successfully",
            data:{
                username:newUser.username,
                email:newUser.email //dont show password :)

            }
        })
    }
    catch(error){
            //we have to handle the error here

            res.status(500).json({
                message:"some error occured while creating user"
            })
            console.log(error) //for debugging purpose
            //signup is ready for now let's test

            //congrats we managed to make route for signup let's do login now
    }
})
app.post('/login',async(req,res)=>{
    //let's check if values are empty or not
    try{
            const {email,password} = req.body;
            if( !email || !password){
                return res.status(400).json("please enter all fields")

            }
            //now let's check if user exists in db
            const finduser = await User.findOne({email});

            if(!finduser){
                return res.status(400).json({
                    message:"Wrong email or username"
                })
            }
            //we have to check for pass now
            const ispass = await bcrypt.compare(password,finduser.password)
            if(!ispass){
                return res.status(400).json({
                    message:"Wrong credentials..."
                })
            }
           
            const token = SignToken({ userId: finduser._id });

            res.cookie('token', token, {
            httpOnly: true,
        sameSite: 'Strict',
            maxAge: 60 * 60 * 1000 // 1 hour
});

        //    res.json({
        //     message:"Login successful!"
        //    })
        
           res.redirect("post")
        }        
    catch(error){
           return res.status(500).json({
                message:"Wrong Credentials!"
            })
            console.log(error);
    }       //now let's test this login :)

    //yep both routes worked ..lets make other things ..

    //now let's try to implement a simple data entry by the user same steps..first create model to do so..

        //now time to create post routes ..first let's make rough page for post in index.html
})

app.post('/post',protectedroute,async(req,res)=>{
    try{

            //okay let's continue..wait let's do 1 thing ..making sure that only loggedin users are able to post let's try idk :)

            // check for empty inputs, create post ,send res to user
            const {image,desc,title} = req.body;

            if(!image || !desc || !title){
                res.status(400).json({
                    message:"please enter all details..to proceed further"
                })
            }
            const userId = req.userId;
            //create post 
            const newpost = await post.create({
                username,
                image,
                title,
                desc,
            });

            res.status(201).json({
                message:"post created Successfully!"
                , data:{
                    newpost
                }
            })
            

    }
    catch(error){
        res.status(500).json({
            message:"Error occurred while creating post please try again later"
        })
    }
})
app.listen(port,()=>{
    console.log("Server running");
})
