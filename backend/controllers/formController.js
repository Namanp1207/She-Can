import formModel from "../models/formModel.js";
import validator from "validator";

const formRegister = async (req,res) => {
    console.log(req.body)

    const {name,email,message} = req.body;

    try {

        // validate email
        if (!validator.isEmail(email)) {
            return res.json({
                success:false,
                message:"Invalid Email"
            })
        }

        // check existing email
        const exists = await formModel.findOne({ email });

        if (exists) {
            return res.json({
                success:false,
                message:"Already used this email"
            })
        }

        // create form entry
        const newForm = new formModel({
            name,
            email,
            message
        })

        await newForm.save()

        res.json({
            success:true,
            message:"Form Submitted Successfully"
        })

    } catch (error) {
        console.log(error)

        res.json({
            success:false,
            message:"Error"
        })
    }
}

// Listing all Volunteers for admin panel
const listVolunteers = async (req,res) =>{
    try {
        const details = await formModel.find({});
        res.json({success:true,data:details})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export { formRegister, listVolunteers}