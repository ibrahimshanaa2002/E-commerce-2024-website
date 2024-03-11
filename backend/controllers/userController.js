const asyncHandler = require("express-async-handler");
const User = require("../modules/user");
const Rating = require("../modules/Rating");
const nodemailer = require("nodemailer");
const {generateToken} = require("../config/generateToken")
const { emailSubject, emailMessage } = require("./emailConfig");

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400).json({ message: "Please enter all the fields" });
    return;
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400).json({ message: "Email is already in use" });
    return;
  }

  const user = await User.create({ username, email, password });
  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token : generateToken(user._id)
    });
  } else {
    res.status(500).json({ message: "User registration failed" });
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username }); //take email from the inputs and take the email from the db and check them if they ma
  if (user && (await user.matchedPassword(password))) {
    res.status(200).json({
      message: `welcome ${user.username}`,
      _id: user._id,
      username: user.username,
      email: user.email,
      token : generateToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error("invalid email and password");
  }
});

//Email

const SendMail = async (req, res, next) => {
  try {
    const { Email } = req.body;
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "shopcompass.sc@gmail.com",
        pass: "ebwb owna blze kwmb",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: "shopcompass.sc@gmail.com",
      to: Email,
      subject: emailSubject,
      text: emailMessage,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.log(error); // Log the error object here
    res.status(500).json({ message: "Failed to send email" });
  }
};

//Rating
// Update saveFeedback function to include timestamp
const saveFeedback = async (req, res) => {
  try {
    const { name, title, body, rating } = req.body;

    if (!body) {
      return res
        .status(400)
        .json({ message: "Review text (body) is required" });
    }

    // Create a new Feedback document with current timestamp
    const feedback = await Rating.create({
      name,
      title,
      body,
      rating,
      date: new Date(), // Include the current timestamp
    });

    res.status(201).json({ message: "Feedback saved successfully", feedback });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save feedback" });
  }
};


module.exports = {
  registerUser,
  authUser,
  SendMail,
  saveFeedback,
};
