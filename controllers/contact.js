import nodemailer from "nodemailer"

const email = async (req, res) => {
   try {
    const {names, emails, phones, descriptions} = req.body
    if (names === "" || emails === "" || phones === "" || descriptions === "") {
        return res.json({ message: "All fields are mandatory" });
    }
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.AUTH_EMAIL,
            pass: process.env.AUTH_PASS
        }
    })

    const mailOption = {
        from: emails,
        to: "fitmakerr@gmail.com",
        subject: "contact form",
        html: `<html>
      <body style="font-family: Arial, sans-serif; padding: 20px; background-color: black; color: white;">
        <p>${names}</p>
        <p>${emails}</p>
        <p>${phones}</p>
        <p>${descriptions}</p>
      </body>
    </html>`
    }

    const info = await transporter.sendMail(mailOption);

    return res.status(201).json({ status: "SUCCESS", message: "Thankyou for contact us" })
} catch (error) {
       return res.status(404).json({ status: "FAILED", message: "Failed" })
    
   }
}

export default email