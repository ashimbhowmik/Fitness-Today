"use client";

import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

import { GlobalContext } from "@/context/GlobalContext";
import { toast } from "react-toastify";
import Notification from "@/components/Notification/Notification";
import { addBodyExercise } from "@/services/exercise";

// initial Form Data
const initialArmsData = {
  name: "",
  imageUrl: "",
  bio: "",
  tips1: "",
  tips2: "",
  tips3: "",
  tips4: "",
};

export default function Arms() {
  const router = useRouter();
  const [formData, setFormData] = useState(initialArmsData);

  const {
    setComponentLevelLoader,
    currentUpdatedProduct,
    setCurrentUpdatedProduct,
  } = useContext(GlobalContext);

  console.log(currentUpdatedProduct);

  // product handle
  async function handleBody() {
    setComponentLevelLoader({ loading: true, id: "" });

    const res = await addBodyExercise(formData);

    if (res.success) {
      setComponentLevelLoader({ loading: false, id: "" });
      toast.success(res.message, {
        position: toast.POSITION.TOP_CENTER,
      });

      setFormData(initialArmsData);

      setCurrentUpdatedProduct(null);

      setTimeout(() => {
        router.push("/admin-view/add-exercise");
      }, 1000);
    } else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      setComponentLevelLoader({ loading: false, id: "" });
      setFormData(initialArmsData);
    }

    console.log(res);
  }

  console.log(formData);

  return (
    <div className="w-full pt-[20px]">
      <div className="flex flex-col items-start justify-start p-5 mb-20  rounded-xl ">
        <div className="2xl:w-[75%] xl:w-[80%] m-auto  shadow-xl  rounded-lg bg-white relative">
          <div className="px-20 py-10 space-y-8">
            <div className="flex justify-between">
              <div className="border-2 p-3 h-[60px] mt-7 rounded-md border-none"></div>
              <div className="gap-1 flex flex-col">
                <div className="flex gap-2 font-semibold justify-end">
                  <button
                    onClick={() => router.push("/admin-view/doctors-list")}
                  >
                    Weight Loss Exercise
                  </button>
                  <span>/</span>
                  <button onClick={() => router.push("/")}>Home</button>
                </div>
                <h1 className="text-xl font-semibold text-end">Add Exercise</h1>
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

            <section>
              <div className="w-full">
                <label className="pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                  Name
                </label>
                <input
                  type="text"
                  // placeholder="Enter your name"
                  className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mb-7 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  value={formData.name}
                  onChange={(event) => {
                    setFormData({
                      ...formData,
                      name: event.target.value,
                    });
                  }}
                />
              </div>
              <div className="w-full">
                <label className="pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                  Image
                </label>
                <input
                  type="text"
                  // placeholder="Enter your name"
                  className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mb-7 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  value={formData.imageUrl}
                  onChange={(event) => {
                    setFormData({
                      ...formData,
                      imageUrl: event.target.value,
                    });
                  }}
                />
              </div>
              <div className="w-full">
                <label className="pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                  Description
                </label>
                <input
                  type="text"
                  // placeholder="Enter your name"
                  className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 mb-7  text-base block bg-white border-gray-300 rounded-md"
                  value={formData.bio}
                  onChange={(event) => {
                    setFormData({
                      ...formData,
                      bio: event.target.value,
                    });
                  }}
                />
              </div>
              <div className="w-full">
                <label className="pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                  Tips 1
                </label>
                <input
                  type="text"
                  // placeholder="Enter your name"
                  className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 mb-7  text-base block bg-white border-gray-300 rounded-md"
                  value={formData.tips1}
                  onChange={(event) => {
                    setFormData({
                      ...formData,
                      tips1: event.target.value,
                    });
                  }}
                />
              </div>
              <div className="w-full">
                <label className="pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                  Tips 2
                </label>
                <input
                  type="text"
                  // placeholder="Enter your name"
                  className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 mb-7  text-base block bg-white border-gray-300 rounded-md"
                  value={formData.tips2}
                  onChange={(event) => {
                    setFormData({
                      ...formData,
                      tips2: event.target.value,
                    });
                  }}
                />
              </div>

              <div className="w-full">
                <label className="pt-0 pr-2 pb-0  pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                  Tips 3
                </label>
                <input
                  type="text"
                  // placeholder="Enter your password"
                  className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 mb-7  text-base block bg-white border-gray-300 rounded-md"
                  value={formData.tips3}
                  onChange={(event) => {
                    setFormData({
                      ...formData,
                      tips3: event.target.value,
                    });
                  }}
                />
              </div>
              <div className="w-full">
                <label className="pt-0 pr-2 pb-0  pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                  Tips 4
                </label>
                <input
                  type="text"
                  // placeholder="Enter your password"
                  className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 mb-7  text-base block bg-white border-gray-300 rounded-md"
                  value={formData.tips4}
                  onChange={(event) => {
                    setFormData({
                      ...formData,
                      tips4: event.target.value,
                    });
                  }}
                />
              </div>
            </section>
            <div></div>
          </div>
          <div className="absolute w-full bottom-[-30px]">
            <div className="flex justify-center">
              <button
                onClick={handleBody}
                type="button"
                className=" text-xl w-[300px] px-8 py-4 overflow-hidden font-semibold rounded-lg bg-black text-white  "
              >
                Add Weight Loss Exercise
              </button>
            </div>
          </div>
        </div>
      </div>
      <Notification />
    </div>
  );
}
