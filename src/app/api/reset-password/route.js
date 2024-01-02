// In your pages/api/reset-password.js file

import Joi from "joi";
import { NextResponse } from "next/server";
import RegUsers from "@/models/reg-users";
import { hash } from "bcrypt";
import connectToDB from "@/database";

const schema = Joi.object({
  email: Joi.string().email().required(),
  newPassword: Joi.string().min(6).required(),
});

export async function POST(req) {
  await connectToDB();

  const { email, newPassword } = await req.json();

  const { error } = schema.validate({ email, newPassword });

  if (error) {
    return NextResponse.json({
      success: false,
      message: error.details[0].message,
    });
  }

  try {
    const user = await RegUsers.findOne({ email });

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User not found with this email address",
      });
    }

    // Hash the new password
    const hashedPassword = await hash(newPassword, 12);

    // Update the user's password in the database
    user.password = hashedPassword;
    await user.save();

    return NextResponse.json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    console.error("Error during password reset:", error);

    return NextResponse.json({
      success: false,
      message: "Something went wrong. Please try again later",
    });
  }
}
