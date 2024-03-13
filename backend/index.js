const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const userRoute = require("./Routes/userRoute");
const productRoute = require("./Routes/productRoute") 
const cartRoute =require("./Routes/cartRoute")
dotenv.config();

// Connect to MongoDB
connectDb();
const app = express();

app.use(cors());
app.use(express.json());

// Mount userRoute
app.use("/api/user", userRoute);
app.use("/api/product",productRoute)
app.use("/api/cart",cartRoute)

// Start the server
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
