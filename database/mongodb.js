import mongoose from "mongoose";
import {DB_URI, NODE_ENV} from "../config/env.js";

if(!DB_URI){
    throw new Error("Please provide DB_URI in the environment variables");
}

// setup mongoose connection
const connectToDatabase = async () => {
    try{
        if(NODE_ENV === 'development') {
            mongoose.set('debug', true);
        }
        await mongoose.connect(DB_URI);
        console.log("Mongoose connected successfully", NODE_ENV);
    }catch(error){
        console.error("Mongoose connection error", error);
        process.exit(1);
    }
}

export default connectToDatabase;
