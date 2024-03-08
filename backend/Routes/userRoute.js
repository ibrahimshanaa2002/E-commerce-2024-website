const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');

const {
  authUser,
  registerUser,
  SendMail,
} = require("../controllers/userController");

router.post("/login", authUser);
router.post("/signup", registerUser);
router.post("/SendMail", SendMail);

module.exports = router;
