import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import UserAppoinments from "@/models/userAppoinments";
import Joi from "joi";
import { NextResponse } from "next/server";

const AddNewAppoinment = Joi.object({
  userID: Joi.string().required(),
  doctorName: Joi.string().required(),
  name: Joi.string().required(),
  phone: Joi.string().required(),
  dateOf: Joi.string().required(),
  time: Joi.string().required(),
});

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();

    const isAuthUser = await AuthUser(req);

    if (isAuthUser) {
      const data = await req.json();

      const { userID, doctorName, name, phone, dateOf, time } = data;

      const { error } = AddNewAppoinment.validate({
        userID,
        doctorName,
        name,
        phone,
        dateOf,
        time,
      });

      if (error) {
        return NextResponse.json({
          success: false,
          message: error.details[0].message,
        });
      }

      const newAppoinment = await UserAppoinments.create(data);

      if (newAppoinment) {
        return NextResponse.json({
          success: true,
          message: "UserAppoinments added successfully",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "failed to add an address ! Please try again later",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "You are not authenticated",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
