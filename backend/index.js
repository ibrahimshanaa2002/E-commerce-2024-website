const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const userRoute = require("./Routes/userRoute");
const productRoute = require("./Routes/productRoute");
const cartRoute = require("./Routes/cartRoute");
const chekoutRoute = require("./Routes/checkOutRoute");
dotenv.config();

// Connect to MongoDB
connectDb();
const app = express();

app.use(cors());
app.use(express.json());

app.use(
  cors({
    origin: ["https://deploy-mern-1hwq.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
); // Mount userRoute
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api", chekoutRoute);

// Start the server
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
