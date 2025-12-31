import mongoose from "mongoose";
import {DB_URL}  from "./serverConfig.js";

export default async function connectDB() {
    try {
        await mongoose.connect(DB_URL)
        console.log("Connected to mongoDB")
    } catch (error) {
        console.log("Something went wrong while connecting to mongoDB. ")
        console.log(error)
    }
}