import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://greatstack:33858627@cluster0.njdxv5l.mongodb.net/shecan').then(()=>console.log("DB Connected"));
}