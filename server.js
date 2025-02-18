import express from "express"
import dotenv from "dotenv"
import authRouter from "./routes/userRouter.js";
import connectDB from "./config/dbConnection.js";
import bodyParser from "body-parser";
import cors from 'cors'

connectDB()
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cors())
app.use("/", authRouter)

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})
