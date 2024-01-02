import mongoose from "mongoose";

const AarmSchema = new mongoose.Schema(
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

const Aarm = mongoose.models.Aarms || mongoose.model("Aarms", AarmSchema);

export default Aarm;
