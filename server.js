import express from "express"
import dotenv from "dotenv"
import authRouter from "./routes/userRouter.js";
import connectDB from "./config/dbConnection.js";
import bodyParser from "body-parser";
import cors from 'cors'
import filterRouter from "./routes/filterRouter.js";

connectDB()
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(cors({
    origin: "http://localhost:5173", // Allow frontend origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed request methods
    credentials: true, // Allow cookies if needed
}));
app.use("/", authRouter)
app.use("/user", filterRouter)



app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})
