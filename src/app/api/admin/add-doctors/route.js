import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Doctors from "@/models/doctors";
import Joi from "joi";
import { NextResponse } from "next/server";

const AddNewDoctorSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  specialization: Joi.string().required(),
  totalPatients: Joi.string().required(),
  hostpital: Joi.string().required(),
  role: Joi.string().required(),
  imageUrl: Joi.string().required(),
  bio: Joi.string().required(),
});

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();

    const isAuthUser = await AuthUser(req);

    if (isAuthUser?.role === "admin" || isAuthUser?.role === "developer") {
      const extractData = await req.json();

      const {
        name,
        email,
        phone,
        specialization,
        totalPatients,
        hostpital,
        role,
        imageUrl,
        bio,
      } = extractData;

      const { error } = AddNewDoctorSchema.validate({
        name,
        email,
        phone,
        specialization,
        totalPatients,
        hostpital,
        role,
        imageUrl,
        bio,
      });

      if (error) {
        return NextResponse.json({
          success: false,
          message: error.details[0].message,
        });
      }

      const newlyCreatedProduct = await Doctors.create(extractData);

      if (newlyCreatedProduct) {
        return NextResponse.json({
          success: true,
          message: "Doctor added successfully",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Failed to add the New Doctor ! please try again",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "You are not autorized !",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
