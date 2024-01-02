import mongoose from "mongoose";

const UserAppoinmentSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    doctorName: String,
    name: String,
    phone: String,
    dateOf: String,
    time: String,
  },
  { timestamps: true }
);

const UserAppoinments =
  mongoose.models.UserAppoinments ||
  mongoose.model("UserAppoinments", UserAppoinmentSchema);

export default UserAppoinments;
