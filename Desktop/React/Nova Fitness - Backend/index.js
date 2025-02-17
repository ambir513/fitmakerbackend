import express from 'express'
import cors from 'cors'
import { User, connectDB } from './Database/mongodb.js'
import dotenv from 'dotenv'

dotenv.config()
const app = express()


// middlewares
app.use(express.json())
app.use(cors())

// mongoDB connections 
const Server = async () => {
    try {
        await connectDB()
        console.log("Connected to MongoDB Cluster");

        const PORT = process.env.PORT || 3000
        app.listen(PORT, () => {
            console.log(`server is running on PORT ${PORT}`);
        })
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1)
        
    }
}
Server()

// routes
app.get("/", (req, res) => {
    res.status(200).send({ message: "Hello from Server" })
})
// adding into mongoDB
app.post("/user", async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        res.status(201).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
})
// checking into mongoDB
app.post("/user", async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email: email, password: password }).select("name email password");
        console.log(user);
        res.status(200).json(user)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
})


