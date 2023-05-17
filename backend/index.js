const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./src/routes/user");
const authRoute = require("./src/routes/auth");
const productRoute = require("./src/routes/product");
const cartRoute = require("./src/routes/cart");
const orderRoute = require("./src/routes/order");
const stripeRoute = require("./src/routes/stripe");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected Successfully!"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/stripe", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is up and running on port: ${process.env.PORT}`);
});
