import app from "./app";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/pizza")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});