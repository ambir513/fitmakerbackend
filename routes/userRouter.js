import express from "express"
import { userSignup, userLogin, userVerify, userData, userVerifyEmail } from "../controllers/userController.js"

const authRouter = express.Router()

authRouter.post("/register", userSignup)
authRouter.post("/login", userLogin)
authRouter.post("/userverify", userVerify)
authRouter.post("/user", userData)
authRouter.get("/verify", userVerifyEmail)


export default authRouter   