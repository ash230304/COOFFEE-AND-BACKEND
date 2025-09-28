// require ('dotenv').config({path: './.env'});


import Dotenv from "dotenv";
import connectDB from "./db/index.js";


Dotenv.configDotenv({ path: "./.env" });
//import { configDotenv } from "dotenv";



connectDB();









/*
import express from "express";
const app = express();

;( async() => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("Error in server:", error);
            throw error;
        });
        app.listen(process.env.PORT, () => {
            console.log(`Server is running at PORT ${process.env.PORT}`);
            console.log("DB connected");  
        });
        
    } catch (error) {
        console.log("Error in DB connection", error);
        throw error;
        
    }
})();    */

