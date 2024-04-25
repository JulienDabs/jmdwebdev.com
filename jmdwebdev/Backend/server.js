require("dotenv").config();

const express = require("express");
const cors = require("cors");
const sendEmail = require("./utils/sendEmail"); // import your sendEmail function

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: "https://jmdwebdev.com" }));
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
