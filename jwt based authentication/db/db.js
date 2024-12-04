import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);

        console.log("Database connection successful");
    } catch (error) {
        console.error("Failed to connect to the database", error.message);
        process.exit(1);
    }
};
