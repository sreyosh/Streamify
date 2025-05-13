import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path:"./.env"
})

const databaseConnection = () => {
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("mongodb connected successfully");
    }).catch((error)=>{
        console.log(error);
    })
};
export default databaseConnection;