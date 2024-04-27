require("dotenv").config();

const express = require("express");
const cors = require("cors");
const sendEmail = require("./utils/sendEmail"); // import your sendEmail function

const app = express();
const PORT = process.env.PORT || 3001;

// Define CORS options
const corsOptions = {
  origin: ['https://www.jmdwebdev.com', 'https://jmdwebdev.com'], // Allow both with and without www
  methods: 'POST', // Or whatever methods you need
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // If your front end needs to send credentials like cookies
};

app.use(cors(corsOptions));
app.use(express.json()); // Middleware to parse JSON bodies

// Your email sending route will be added here later.

app.post("/send-email", async (req, res) => {
  const { subject, message, send_to, sent_from, reply_to } = req.body;

  try {
    await sendEmail(subject, message, send_to, sent_from, reply_to);
   
    res.status(200).json({ message: "Email sent successfully!!!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to send email", error: error.message });
  }
});



app.listen(PORT);
