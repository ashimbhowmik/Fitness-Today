import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    specialization: String,
    totalPatients: String,
    hostpital: String,
    role: String,
    imageUrl: String,
    bio: String,
  },
  { timestamps: true }
);

const Doctors =
  mongoose.models.Doctors || mongoose.model("Doctors", DoctorSchema);

export default Doctors;
