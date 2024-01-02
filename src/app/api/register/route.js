import mongoose from "mongoose";
import connectToDB from "@/database";
// import User from "@/models/user";
import { hash } from "bcrypt";
import Joi from "joi";
import { NextResponse } from "next/server";
import RegUsers from "@/models/reg-users";

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  age: Joi.string().required(),
  role: Joi.string().required(),
});

export async function POST(req, res) {
  await connectToDB();

  const { name, email, password, age, role } = await req.json();
  //validate the schema

  const { error } = schema.validate({
    name,
    email,
    password,
    age,
    role,
  });

  if (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: email.details[0],
    });
  }

  try {
    //check if the user already exists or not

    const isUserAlreadyExists = await RegUsers.findOne({ email });

    if (isUserAlreadyExists) {
      return NextResponse.json({
        success: false,
        message: "User already exists. Please try with a different email.",
      });
    } else {
      const hashPassword = await hash(password, 12);

      const newlyCreatedUser = await RegUsers.create({
        name,
        email,
        password: hashPassword,
        age,
        role,
      });

      if (newlyCreatedUser) {
        return NextResponse.json({
          success: true,
          message: "Account created successfully.",
        });
      }
    }
  } catch (error) {
    console.log("Error while new user registration. Please try again");

    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later.",
    });
  }
}
