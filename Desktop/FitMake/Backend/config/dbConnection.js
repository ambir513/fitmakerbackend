import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const URL = process.env.URL
const connectDB = async () => {
    try {
        const connect = await mongoose.connect(URL)
        console.log(`Successfully Connected ${connect.connection.host} ${connect.connection.name}`);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}
export default connectDB