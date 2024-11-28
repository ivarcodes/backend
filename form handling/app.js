import express from 'express';
import connectDB from './database/db.js'
import { user } from './database/models/userSchema.js';
const app  = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('home');
})
app.post('/formdata', async (req, res) => {
    const { username, email, password } = req.body;

    console.log(req.body);
    res.send(`Welcome back, ${username}! We're glad to have you back. Have a great day!`);

    const newUser = new user({
        username,
        email,
        password
    });

    try {
        await newUser.save();
        console.log("User saved:", newUser);
    } catch (error) {
        console.log('Error saving user:', error);
        res.status(500).send('Error saving user to database');
    }
});



app.listen(3000,()=>{
    console.log("listening to server");
})