import User from "../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

//@des Create a User
//@route POST /register
//@access public
const userSignup = async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (!username || !email || !password) {
            return res.json({ message: "All fields are mandatory" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.json({ status: "FAILED", message: "User is already register" })
        }
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        })
        res.status(201).json({ status: "SUCCESS", message: "User created successfully" })
    } catch (error) {
        res.status(500).json({ status: "FAILED", message: "Error signing up" })
    }
}
//@des Login User
//@route POST /login
//@access public 
const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.json({ status: "FAILED", message: "All fields are mandatory" })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({ status: "FAILED", message: "User is not avalible, Please Register now" })
        }
        const passwordValid = await bcrypt.compare(password, user.password)
        if (!passwordValid) {
            return res.status(401).json({ status: "FAILED", message: "Invalid credentials" })
        }
        const token = jwt.sign({
            userId: user._id
        },
            process.env.SECRET_KEY,
            {
                expiresIn: "1hr"
            }
        )
        res.json({ status: "SUCCESS", message: "Login successfull", token })
    } catch (error) {
        res.status(500).json({ message: "Error logining in" })
    }
}

//@des Current User
//@route GET /register
//@access public with hashedpassword
const userAll = async (req, res) => {
    try {
        const user = await User.find()
        res.status(201).json({ status: "SUCCESS", user })
    } catch (error) {
        res.status(500).json({ status: "FAILED", message: "Error will geting user " })
    }
}

export { userSignup, userLogin, userAll }