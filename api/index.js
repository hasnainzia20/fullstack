import express from "express";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017")
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();

app.listen(3000, () => {
  console.log("Server is Running");
});
