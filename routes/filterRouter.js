import express from "express"
import diet from "../controllers/diet.controllers.js"
import expressAsyncHandler from "express-async-handler"
import User from "../models/userModel.js"


const filterRouter = express.Router()

filterRouter.post("/diet-data", diet)
filterRouter.post(
    "/diet",
    expressAsyncHandler(async (req, res) => {
        const { userId, Breakfast, Lunch, Snacks, Dinner, Hydration } = req.body;

        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }

        try {

            const updatedUser = await User.findByIdAndUpdate(
                userId,
                {
                    $set: {
                        "diet.Breakfast": Breakfast,
                        "diet.Lunch": Lunch,
                        "diet.Snacks": Snacks,
                        "diet.Dinner": Dinner,
                        "diet.Hydration": Hydration,
                    },
                },
                { new: true, runValidators: true }
            );

            if (!updatedUser) {
                return res.status(404).json({ message: "User not found" });
            }

            res.status(200).json({ message: "Diet successfully saved", user: updatedUser });
        } catch (error) {
            console.error("Update Error:", error.message);
            res.status(500).json({ message: "Server error", error: error.message });
        }
    })
);

export default filterRouter