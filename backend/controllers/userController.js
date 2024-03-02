const asyncHandler = require("express-async-handler");
const User = require("../modules/user");



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
        
       
      });
    } else {
      res.status(500).json({ message: "User registration failed" });
    }
  });
  



const authUser = asyncHandler(async (req,res)=>{
    const{username ,password} = req.body;

    const user = await User.findOne({username})//take email from the inputs and take the email from the db and check them if they ma
    if(user && (await user.matchedPassword(password))){
        res.status(200).json({
            message: `welcome ${user.username}`,
            _id : user._id,
            username: user.username,
            email:user.email,
          
        })
    }
    else
    {
        res.status(400)
        throw new Error("invalid email and password")
    }

})

module.exports = {
    registerUser,
    authUser
};