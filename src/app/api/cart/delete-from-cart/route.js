import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import ProductCarts from "@/models/product-carts";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);
    if (isAuthUser) {
      const { searchParams } = new URL(req.url);
      const id = searchParams.get("id");
      if (!id)
        return NextResponse.json({
          success: false,
          message: "ProductCarts Item ID is required",
        });

      const deleteCartItem = await ProductCarts.findByIdAndDelete(id);

      if (deleteCartItem) {
        return NextResponse.json({
          success: true,
          message: "ProductCarts Item deleted successfully",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Failed to delete ProductCarts item ! Please try again.",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "You are not authenticated",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again",
    });
  }
}
