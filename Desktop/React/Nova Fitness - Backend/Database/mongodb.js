import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()
const URL = process.env.URL

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB Connected ${connection.connection.host}`);
    } catch (error) {
        console.log(`MongoDB Connection Failed ${error.message}`);
        process.exit(1)
    }
}

const userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String
    },
    { timestamps: true })

const User = mongoose.model("User", userSchema)

export { User, connectDB }
