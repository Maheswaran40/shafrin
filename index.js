const express = require("express")
const app = express()

const dotenv = require("dotenv")
dotenv.config()

const connectDB = require("./config/db")
connectDB()

app.use(express.json())

const route = require("./routes/userRoutes")
app.use("/api",route)

// REST API  [http]  get , post , put , delete

app.get("/" ,(req,res)=>(
    res.status(200).send("server is running")
))


app.listen(process.env.PORT , ()=>console.log("server is running"))