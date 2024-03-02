const express = require("express");
const router = express.Router();
const {authUser,registerUser} =require("../controllers/userController")

router.post("/login", authUser);
router.post("/signup", registerUser);

module.exports = router;
