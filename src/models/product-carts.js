import mongoose from "mongoose";

const ProductCartSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
    orders: {
      type: String,
      required: true,
      default: "Pending",
    },
  },

  { timestamps: true }
);

// Check if the model already exists before defining it
const ProductCarts =
  mongoose.models.ProductCart ||
  mongoose.model("ProductCart", ProductCartSchema);

export default ProductCarts;
