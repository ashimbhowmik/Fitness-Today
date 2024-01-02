import connectToDB from "@/database";
import RegUsers from "@/models/reg-users";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Inside your backend PUT function

// ...

export async function PUT(req) {
  try {
    await connectToDB();

    const extractData = await req.json();
    const { _id, email, role } = extractData;

    const updateUser = await RegUsers.findOneAndUpdate(
      {
        _id,
      },
      {
        email,
        role,
      },
      { new: true }
    );

    if (updateUser) {
      return NextResponse.json({
        success: true,
        message: "User role updated successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to update the user role! Please try again later",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later",
    });
  }
}
