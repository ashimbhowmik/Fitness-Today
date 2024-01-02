"use client";

import CommonCart from "@/components/CommonCart";
import { GlobalContext } from "@/context/GlobalContext";
import { deleteFromCart, getAllCartItems } from "@/services/cart";
import { useRouter } from "next/navigation";
import { Fragment, useContext, useEffect } from "react";
import { HashLoader } from "react-spinners";

import { toast } from "react-toastify";

export default function Cart() {
  const {
    user,
    setCartItems,
    cartItems,
    pageLevelLoader,
    setPageLevelLoader,
    setComponentLevelLoader,
    componentLevelLoader,
  } = useContext(GlobalContext);

  const router = useRouter();

  async function extractAllCartItems() {
    setPageLevelLoader(true);
    const res = await getAllCartItems(user?._id);

    if (res.success) {
      setCartItems(res.data);
      //   const updatedData =
      //     res.data && res.data.length
      //       ? res.data.map((item) => ({
      //           ...item,
      //           productID: {
      //             ...item.productID,
      //             price:
      //               item.productID.onSale === "yes"
      //                 ? parseInt(
      //                     (
      //                       item.productID.price -
      //                       item.productID.price *
      //                         (item.productID.priceDrop / 100)
      //                     ).toFixed(2)
      //                   )
      //                 : item.productID.price,
      //           },
      //         }))
      //       : [];
      //   setCartItems(updatedData);
      setPageLevelLoader(false);
      //   localStorage.setItem("cartItems", JSON.stringify(updatedData));
      localStorage.setItem("cartItems", JSON.stringify(res.data));
    }

    console.log(res);
  }

  useEffect(() => {
    if (user !== null) extractAllCartItems();
  }, [user]);

  async function handleDeleteCartItem(getCartItemID) {
    setComponentLevelLoader({ loading: true, id: getCartItemID });
    const res = await deleteFromCart(getCartItemID);

    if (res.success) {
      setComponentLevelLoader({ loading: false, id: "" });
      toast.success(res.message, {
        position: toast.POSITION.TOP_CENTER,
      });

      extractAllCartItems();
    } else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      setComponentLevelLoader({ loading: false, id: getCartItemID });
    }
  }

  if (pageLevelLoader) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <HashLoader
          color={"#000000"}
          loading={pageLevelLoader}
          size={50}
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    // <div className="mt-[100px]">Length : {cartItems.length}</div>
    <CommonCart
      componentLevelLoader={componentLevelLoader}
      handleDeleteCartItem={handleDeleteCartItem}
      cartItems={cartItems}
    />
  );
}
