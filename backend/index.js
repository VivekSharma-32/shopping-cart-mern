const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./src/routes/user");
const authRoute = require("./src/routes/auth");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected Successfully!"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is up and running on port: ${process.env.PORT}`);
});
