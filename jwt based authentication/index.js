import express, { urlencoded } from 'express';
import authrouter from './routes/auth.route.js';
import dotenv from 'dotenv';

dotenv.config();
import {connectToDb} from '../backend/db/db.js'

const port = process.env.PORT || 5001;
const app = express();
app.use(express.json());
connectToDb()
app.use('/api/auth',authrouter);

app.listen(port,()=>{
    console.log("Server is running on port",port)
})