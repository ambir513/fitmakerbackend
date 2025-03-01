import mongoose from "mongoose";

const dietSchema = new mongoose.Schema({
    Breakfast: { type: String, default: "" },
    Lunch: { type: String, default: "" },
    Snacks: { type: String, default: "" },
    Dinner: { type: String, default: "" },
    Hydration: { type: String, default: "" }
});

const userSchema = new mongoose.Schema(
    {
        username: { type: String },
        email: { type: String },
        password: { type: String },
        diet: { type: dietSchema, default: {} }
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
