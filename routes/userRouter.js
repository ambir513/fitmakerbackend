import express from "express"
import { userSignup, userLogin, userVerify, userData } from "../controllers/userController.js"

const authRouter = express.Router()

authRouter.post("/register", userSignup)
authRouter.post("/login", userLogin)
authRouter.post("/verify", userData)
authRouter.post("/user", userData)


export default authRouter