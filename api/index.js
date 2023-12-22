import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

mongoose
  .connect("mongodb://127.0.0.1:27017/mern-auth-db")
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.use("/app/user", userRoutes);
app.use("/app/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server is Running");
});
