import connectToDB from "@/database";
import Doctors from "@/models/doctors";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const doctorId = searchParams.get("id");

    if (!doctorId) {
      return NextResponse.json({
        success: false,
        status: 400,
        message: "Doctors id is required",
      });
    }
    const getData = await Doctors.find({ _id: doctorId });

    if (getData && getData.length) {
      return NextResponse.json({ success: true, data: getData[0] });
    } else {
      return NextResponse.json({
        success: false,
        status: 204,
        message: "No Doctors found",
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
