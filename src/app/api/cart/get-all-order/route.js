import connectToDB from "@/database";
import { NextResponse } from "next/server";
import ProductCarts from "@/models/product-carts";
// import AuthUser from "@/middleware/AuthUser";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();
    // const isAuthUser = await AuthUser(req);

    const extractAllproducts = await ProductCarts.find({});

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
