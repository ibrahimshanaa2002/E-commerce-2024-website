const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const userRoute = require("./Routes/userRoute");
const productRoute = require("./Routes/productRoute") // assuming userRoute is exported correctly
dotenv.config();

// Connect to MongoDB
connectDb();
const app = express();

app.use(cors());
app.use(express.json());

// Mount userRoute
app.use("/api/user", userRoute);
app.use("/api/product",productRoute)

// Start the server
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
