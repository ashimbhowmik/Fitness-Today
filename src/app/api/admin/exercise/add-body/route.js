import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Boddys from "@/models/boddy";
import Joi from "joi";
import { NextResponse } from "next/server";

const AddArmsNew = Joi.object({
  name: Joi.string().required(),
  imageUrl: Joi.string().required(),
  bio: Joi.string().required(),
  tips1: Joi.string().required(),
  tips2: Joi.string().required(),
  tips3: Joi.string().required(),
  tips4: Joi.string().required(),
});

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();

    const isAuthUser = await AuthUser(req);

    if (isAuthUser?.role === "admin" || isAuthUser?.role === "developer") {
      const extractData = await req.json();

      const { name, imageUrl, bio, tips1, tips2, tips3, tips4 } = extractData;

      const { error } = AddArmsNew.validate({
        name,
        imageUrl,
        bio,
        tips1,
        tips2,
        tips3,
        tips4,
      });

      if (error) {
        return NextResponse.json({
          success: false,
          message: error.details[0].message,
        });
      }

      const newlyCreatedProduct = await Boddys.create(extractData);

      if (newlyCreatedProduct) {
        return NextResponse.json({
          success: true,
          message: "Body Exercise added successfully",
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
