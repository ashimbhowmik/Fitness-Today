"use client";

import ComponentLevelLoader from "@/components/Loader/ComponentLevelLoader/ComponentLevelLoader";
import { GlobalContext } from "@/context/GlobalContext";
import { addToCart } from "@/services/cart";
// import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function ClientButton({ item }) {
  // const router = useRouter();

  const {
    setCurrentUpdatedProduct,
    setComponentLevelLoader,
    componentLevelLoader,
    user,
    showCartModal,
    setShowCartModal,
  } = useContext(GlobalContext);

  async function handleAddToCart(getItem) {
    setComponentLevelLoader({ loading: true, id: getItem._id });

    const res = await addToCart({ productID: getItem._id, userID: user._id });

    if (res.success) {
      toast.success(res.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      setComponentLevelLoader({ loading: false, id: "" });
      setShowCartModal(true);
    } else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      setComponentLevelLoader({ loading: false, id: "" });
      setShowCartModal(true);
    }

    console.log(res);
  }
  return (
    <>
      <div className="w-full">
        <button
          onClick={() => handleAddToCart(item)}
          className="bg-black text-white px-5 py-2 font-semibold uppercase text-sm shadow-xl rounded-full"
        >
          {componentLevelLoader &&
          componentLevelLoader.loading &&
          componentLevelLoader.id === item._id ? (
            <ComponentLevelLoader
              text={"Adding"}
              color={"#ffffff"}
              loading={componentLevelLoader && componentLevelLoader.loading}
            />
          ) : (
            "Add To Cart"
          )}
        </button>
      </div>
    </>
  );
}
