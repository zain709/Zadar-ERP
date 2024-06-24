import mongoose from "mongoose";

export const connectDB =async ()=>{
    await mongoose.connect('mongodb+srv://zain:496897@cluster0.pv8gkdu.mongodb.net/Zadar-ERP').then(()=>console.log("DB Connected"));
}

