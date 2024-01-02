import mongoose from "mongoose";

const BoddySchema = new mongoose.Schema(
  {
    name: String,
    imageUrl: String,
    bio: String,
    tips1: String,
    tips2: String,
    tips3: String,
    tips4: String,
  },
  { timestamps: true }
);

const Boddys = mongoose.models.Boddys || mongoose.model("Boddys", BoddySchema);

export default Boddys;
