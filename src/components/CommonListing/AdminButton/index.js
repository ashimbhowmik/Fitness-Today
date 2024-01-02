"use client";

import ComponentLevelLoader from "@/components/Loader/ComponentLevelLoader/ComponentLevelLoader";
import { GlobalContext } from "@/context/GlobalContext";
import { deleteAProduct } from "@/services/product";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function AdminButton({ item }) {
  const pathName = usePathname();
  const router = useRouter();

  const {
    setCurrentUpdatedProduct,
    setComponentLevelLoader,
    componentLevelLoader,
    user,
    showCartModal,
    setShowCartModal,
  } = useContext(GlobalContext);

  const isAdminView = pathName.includes("admin-view");

  // delete product
  // item theke id nichi jodi sudhu id nitam tahole sob delete hoye jaito
  async function handleDeleteProduct(item) {
    setComponentLevelLoader({ loading: true, id: item._id });

    const res = await deleteAProduct(item._id);

    if (res.success) {
      setComponentLevelLoader({ loading: false, id: "" });
      toast.success(res.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      router.refresh();
      window.location.reload(false);
    } else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      setComponentLevelLoader({ loading: false, id: "" });
    }
  }

  return isAdminView ? (
    <>
      <div className="flex gap-6 items-center text-slate-500">
        <button
          onClick={() => {
            setCurrentUpdatedProduct(item);
            router.push("/admin-view/add-product");
          }}
          className="mt-1.5 flex items-center gap-3  w-full   py-3 font-medium uppercase"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
          Update
        </button>
        <p>|</p>
        <button
          onClick={() => {
            handleDeleteProduct(item);
            router.refresh();
          }}
          className="mt-1.5 flex items-center gap-3  w-full   py-3 font-medium uppercase "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>

          {componentLevelLoader &&
          componentLevelLoader.loading &&
          item._id === componentLevelLoader.id ? (
            <ComponentLevelLoader
              text={"Deleting Product"}
              color={"#000000"}
              loading={componentLevelLoader && componentLevelLoader.loading}
            />
          ) : (
            "DELETE"
          )}
        </button>
      </div>
    </>
  ) : (
    <>
      <button
        // onClick={() => handleAddToCart(item)}
        className="mt-1.5 flex w-full justify-center bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
      >
        {/* {componentLevelLoader &&
        componentLevelLoader.loading &&
        componentLevelLoader.id === item._id ? (
          <ComponentLevelLoader
            text={"Adding to cart"}
            color={"#ffffff"}
            loading={componentLevelLoader && componentLevelLoader.loading}
          />
        ) : (
          "Add To Cart"
        )} */}
        Add To Cart
      </button>
    </>
  );
}
