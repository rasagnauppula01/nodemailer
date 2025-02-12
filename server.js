const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(cors())

const transporter = nodemailer.createTransport({
  service: "gmail", // Use the correct email provider
  auth: {
    user: "murthysatti321@gmail.com", // Your email
    pass: "zianylyeczyuvrgj", // App Password (DO NOT share publicly)
  },
});

app.use(express.json());

app.post("/sendmail", async (req,res) => {

const emailFromClient = req.body.email;

console.log(emailFromClient)

  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: "murthysatti321@gmail.com",
      to: emailFromClient,
      subject: "Test message",
      text: "This is a test email sent using Nodemailer!",
      html: "<b>HTML, CSS, Javascript, React.js, Node.js, Express.js, and MongoDB?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    return res.status(200).json({ message: "Mail set successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
  
  res.status(200).send("<h2>Email Sent</h2>")

}


);

app.use((req, res) => {
  return res.status(404).send("<h2> 404 not found</h2>");
});


app.listen(8080, () => {
  console.log("Server started");
});