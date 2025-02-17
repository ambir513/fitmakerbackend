import express from "express"
import { userSignup, userLogin, userAll } from "../controllers/userController.js"

const authRouter = express.Router()

authRouter.post("/register", userSignup)
authRouter.post("/login", userLogin)
authRouter.get("/register", userAll)


export default authRouter