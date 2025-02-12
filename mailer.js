const nodemailer = require("nodemailer");

// Create a transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // Use the correct email provider
  auth: {
    user: "murthysatti321@gmail.com", // Your email
    pass: "zianylyeczyuvrgj", // App Password (DO NOT share publicly)
  },
});

// Email options
const mailOptions = {
  from: "murthysatti321@gmail.com",
  to: "uppularasagna@gmail.com",
  subject: "Pogaru bothu murthy",
  text: "This is a test email sent using Nodemailer!",
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});