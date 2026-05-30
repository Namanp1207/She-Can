import express from "express"
import { formRegister, listVolunteers } from "../controllers/formController.js"

const formRouter = express.Router()

formRouter.post("/form",formRegister);
formRouter.get('/list',listVolunteers)

export default formRouter; 