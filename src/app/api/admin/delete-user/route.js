import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import RegUsers from "@/models/reg-users";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser?.role === "admin" || isAuthUser?.role === "developer") {
      // update url a jeye hit korbe
      const { searchParams } = new URL(req.url);
      const id = searchParams.get("id");

      if (!id)
        return NextResponse.json({
          success: false,
          message: "Product ID is required",
        });

      const deletedProduct = await RegUsers.findByIdAndDelete(id);

      if (deletedProduct) {
        return NextResponse.json({
          success: true,
          message: "User deleted successfully",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Failed to delete the User ! Please try again",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "You are not authenticated",
      });
    }
  } catch (e) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
