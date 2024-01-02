import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    age: String,
    role: String,
  },
  { collection: "reg-users" }
);

const User =
  mongoose.models.User || mongoose.model("User", UserSchema, "reg-users");

export default User;
