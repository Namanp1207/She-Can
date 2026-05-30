import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import formRouter from "./routes/formRoute.js"

// app config
const app = express()
const port = process.env.PORT || 4000;

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

//api endpoints
app.use("/api/form",formRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})
