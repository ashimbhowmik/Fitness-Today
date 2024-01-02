import connectToDB from "@/database";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectToDB();

    const searchQuery = req.query?.q || "";

    const filter = searchQuery
      ? { name: { $regex: searchQuery, $options: "i" } }
      : {};

    const extractedProducts = await Product.find(filter);

    if (extractedProducts.length > 0) {
      return NextResponse.json({
        success: true,
        data: extractedProducts,
      });
    } else {
      return NextResponse.json({
        success: false,
        status: 204,
        message: "No Products found",
      });
    }
  } catch (error) {
    console.error(error);

    // Return a meaningful error response
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later",
    });
  }
}
