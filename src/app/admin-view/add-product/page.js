"use client";

import InputComponent from "@/components/FromElements/InputComponent/InputComponent";
import SelectComponent from "@/components/FromElements/SelectComponent/SelectComponent";
import { adminAddProductformControls } from "@/utils";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

import { addNewProduct, updateAProduct } from "@/services/product";
import { GlobalContext } from "@/context/GlobalContext";
import { toast } from "react-toastify";
import Notification from "@/components/Notification/Notification";
import ComponentLevelLoader from "@/components/Loader/ComponentLevelLoader/ComponentLevelLoader";

// initial Form Data
const initialFormData = {
  name: "",
  price: 0,
  description: "",
  deliveryInfo: "",
  onSale: "no",
  imageUrl: "",
  priceDrop: 0,
};

export default function AdminAddNewProduct() {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormData);

  const {
    componentLevelLoader,
    setComponentLevelLoader,
    currentUpdatedProduct,
    setCurrentUpdatedProduct,
  } = useContext(GlobalContext);

  console.log(currentUpdatedProduct);

  useEffect(() => {
    if (currentUpdatedProduct !== null) setFormData(currentUpdatedProduct);
  }, [currentUpdatedProduct]);

  async function handleImage(event) {
    console.log(event.target.files);
    const extractImageUrl = await helperForUPloadingImageToFirebase(
      event.target.files[0]
    );
    console.log(extractImageUrl);
    if (extractImageUrl !== "") {
      setFormData({
        ...formData,
        imageUrl: extractImageUrl,
      });
    }
  }

  // product handle
  async function handleAddProduct() {
    setComponentLevelLoader({ loading: true, id: "" });
    const res =
      currentUpdatedProduct !== null
        ? await updateAProduct(formData)
        : await addNewProduct(formData);

    // console.log(res);

    if (res.success) {
      setComponentLevelLoader({ loading: false, id: "" });
      toast.success(res.message, {
        position: toast.POSITION.TOP_CENTER,
      });

      setFormData(initialFormData);

      setCurrentUpdatedProduct(null);

      setTimeout(() => {
        router.push("/admin-view/all-products");
      }, 1000);
    } else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      setComponentLevelLoader({ loading: false, id: "" });
      setFormData(initialFormData);
    }

    console.log(res);
  }

  console.log(formData);

  return (
    <div className="w-full  relative pt-[130px]">
      <div className="flex flex-col items-start justify-start p-10 mb-20  rounded-xl relative ">
        <div className="xl:w-[85%] 2xl:w-[75%] m-auto space-y-8 shadow-md px-14 pb-14 pt-10 rounded-lg bg-white relative">
          <div className="flex justify-between">
            <div className="border-2 p-3 h-[60px] mt-7 rounded-md border-none"></div>
            <div className="gap-1 flex flex-col">
              <div className="flex gap-2 font-semibold justify-end">
                <button onClick={() => router.push("/admin-view/all-products")}>
                  Products
                </button>
                <span>/</span>
                <button onClick={() => router.push("/")}>Home</button>
              </div>
              <h1 className="text-xl font-semibold text-end">Add Product</h1>
              <div className="flex justify-end  gap-4">
                <div className="flex justify-center items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  <button className="hover:text-blue-600 font-semibold">
                    Duplicate
                  </button>
                </div>
                <div className="flex justify-end items-center mt-[0.7px] gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <button className="hover:text-blue-600 font-semibold">
                    Preview
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <label className="pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
              Image
            </label>
            <input
              type="text"
              // placeholder="Enter your name"
              className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
              value={formData.imageUrl}
              onChange={(event) => {
                setFormData({
                  ...formData,
                  imageUrl: event.target.value,
                });
              }}
            />
          </div>

          {adminAddProductformControls.map((controlItem) =>
            controlItem.componentType === "input" ? (
              <InputComponent
                type={controlItem.type}
                placeholder={controlItem.placeholder}
                label={controlItem.label}
                value={formData[controlItem.id]}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    [controlItem.id]: event.target.value,
                  });
                }}
              />
            ) : controlItem.componentType === "select" ? (
              <SelectComponent
                label={controlItem.label}
                options={controlItem.options}
                value={formData[controlItem.id]}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    [controlItem.id]: event.target.value,
                  });
                }}
              />
            ) : null
          )}
          <div></div>
          <div className="absolute">
            <button
              onClick={handleAddProduct}
              type="button"
              className="relative text-xl w-[300px] px-8 py-4 ml-4 overflow-hidden font-semibold rounded-lg bg-black text-white 2xl:left-[330px] xl:left-[260px] top-[-7px]"
            >
              {componentLevelLoader && componentLevelLoader.loading ? (
                <ComponentLevelLoader
                  text={
                    currentUpdatedProduct !== null
                      ? "Updating Product"
                      : "Saving New Product"
                  }
                  color={"#ffffff"}
                  loading={componentLevelLoader && componentLevelLoader.loading}
                />
              ) : currentUpdatedProduct !== null ? (
                "Update Product"
              ) : (
                "Save Product"
              )}
            </button>
          </div>
        </div>
      </div>
      <Notification />
    </div>
  );
}
