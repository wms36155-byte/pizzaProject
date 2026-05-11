import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    name: String,
    price: String,
    category: String,
  },
  { timestamps: true }
);

export default mongoose.model("Food", foodSchema);