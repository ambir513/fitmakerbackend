import User from "../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import nodemailer from "nodemailer"

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
        const token = jwt.sign({ username, email }, process.env.SECRET_KEY, { expiresIn: "10m" });
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.AUTH_EMAIL,
                pass: process.env.AUTH_PASS
            }
        })

        const mailOption = {
            from: process.env.AUTH_EMAIL,
            to: email,
            subject: "verify you email",
            html: `<p>Click the link below to verify your email:</p>
           <a href="http://localhost:5173/verify?token=${token}">Verify Email</a>`,
        }

        const info = await transporter.sendMail(mailOption);

        return res.status(201).json({ status: "SUCCESS", message: "Email verification send!" })

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
            return res.json({ status: "FAILED", message: "User is not avalible, Please Register now" })
        }
        const passwordValid = await bcrypt.compare(password, user.password)
        if (!passwordValid) {
            return res.json({ status: "FAILED", message: "Invalid credentials" })
        }
        const token = jwt.sign({
            userId: user._id
        },
            process.env.SECRET_KEY,
            {
                expiresIn: "30d"
            }
        )
        res.json({ status: "SUCCESS", message: "Login successfull", token })
    } catch (error) {
        res.status(500).json({ message: "Error logining in" })
    }
}

//@des Current User
//@route POST / Verifing... token 
//@access Only login user
const userVerify = async (req, res) => {
    const { token } = req.body
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        res.json(decoded)
    } catch (error) {
        res.json({ status: "FAILED", message: "Invalid token" })
    }
}

//@des get verify token user
//@routes POST / User Data
//@access Only verify token user data
const userData = async (req, res) => {
    try {
        const { userId } = req.body
        const user = await User.findById(userId)
        if (user) {
            return res.json(user)
        }
    } catch (error) {
        res.json({ status: "FAILED", message: "Error in userid" })
    }
}


//@des after verify the email
//@routes POST / 
const userVerifyEmail = async (req, res) => {
    const token = req.query.token
    if (!token) {
        return res.json({ status: "FAILED", message: "Invalid or expired token" })
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        return res.json({ status: "SUCCESS", message: "Email verified successfully!", user: decoded });
    } catch (error) {
        return res.json({ status: "FAILED", message: "Token has expired or is invalid" });
    }
}

export { userSignup, userLogin, userVerify, userData, userVerifyEmail }
