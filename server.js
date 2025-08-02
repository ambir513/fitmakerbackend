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
  origin: "https://fitmakerr.vercel.app", // your frontend URL
  credentials: true // if you're sending cookies or auth headers
}));
app.use("/", authRouter)
app.use("/user", filterRouter)



app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})
