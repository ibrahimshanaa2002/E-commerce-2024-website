const express = require("express");
const router = express.Router();
const Rating = require("../modules/Rating");
const nodemailer = require('nodemailer');



const {
  authUser,
  registerUser,
  SendMail,
  saveFeedback,
} = require("../controllers/userController");

router.post("/login", authUser);
router.post("/signup", registerUser);
router.post("/SendMail", SendMail);
router.post("/feedback", saveFeedback);
router.get('/feedback', async (req, res) => {
  try {
    // Retrieve all feedback documents from the database
    const feedback = await Rating.find();

    res.status(200).json(feedback); // Send the feedback data as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to retrieve feedback" });
  }
});

module.exports = router;
