import mongoose from "mongoose";

import { DB_NAME } from "../constaint.js";

const connectDB=async()=>{
    try{
        const connectDBinstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n mongodb connect successfully . DB HOST ${connectDBinstance.connection.host}`);
        
    }catch(error){
        console.log(`mongodb connection failed`,error);
        process.exit(1)
        
    }
}

export default connectDB