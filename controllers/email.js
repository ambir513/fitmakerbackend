import nodemailer from "nodemailer"

const email = async (req, res) => {
   try {
    const {email} = req.body
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
        subject: "Thankyou for Subscribing",
        html: `<html>
      <body style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
        <h2>Thank You for Subscribing! 🎉</h2>
        <p>Hello,</p>
        <p>Thank you for subscribing to our newsletter! Stay tuned for updates.</p>
        <p>If you have any questions, feel free to <a href="mailto:fitmakerr@gmail.com">contact us</a>.</p>
        <br/>
        <strong>- The Fit Maker Team 💪</strong>
      </body>
    </html>`,
    }

    const info = await transporter.sendMail(mailOption);

    return res.status(201).json({ status: "SUCCESS", message: "Thankyou for subscripting 🤩" })
} catch (error) {
       return res.status(404).json({ status: "FAILED", message: "Failed" })
    
   }
}

export default email