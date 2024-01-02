import connectToDB from "@/database";
import Doctors from "@/models/doctors";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();

    const extractAllproducts = await Doctors.find({});

    if (extractAllproducts) {
      return NextResponse.json({
        success: true,
        data: extractAllproducts,
      });
    } else {
      return NextResponse.json({
        success: false,
        status: 204,
        message: "No Products found",
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
