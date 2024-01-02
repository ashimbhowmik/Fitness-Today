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

const RegUsers =
  mongoose.models.RegUsers ||
  mongoose.model("RegUsers", UserSchema, "reg-users");

export default RegUsers;
