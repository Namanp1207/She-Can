import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    message:{type:String}
},{minimize:false})

const formModel = 
mongoose.models.user || 
mongoose.model("user",formSchema);

export default formModel;