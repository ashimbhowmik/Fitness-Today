import mongoose from "mongoose";

const LeegSchema = new mongoose.Schema(
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

const Leegs = mongoose.models.Leegs || mongoose.model("Leegs", LeegSchema);

export default Leegs;
