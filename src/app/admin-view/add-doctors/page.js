"use client";

import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

import { GlobalContext } from "@/context/GlobalContext";
import { toast } from "react-toastify";
import Notification from "@/components/Notification/Notification";

import { addNewDoctor } from "@/services/doctors";

// initial Form Data
const initialFormData = {
  name: "",
  email: "",
  phone: "",
  imageUrl: "",
  bio: "",
  totalPatients: "",
  hostpital: "Lab Aid",
  specialization: "Madical Officer",
  role: "available",
};

export default function AdminAddNewDoctor() {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormData);

  const {
    setComponentLevelLoader,
    currentUpdatedProduct,
    setCurrentUpdatedProduct,
  } = useContext(GlobalContext);

  console.log(currentUpdatedProduct);

  // product handle
  async function handleAddDoctors() {
    setComponentLevelLoader({ loading: true, id: "" });

    const res = await addNewDoctor(formData);

    if (res.success) {
      setComponentLevelLoader({ loading: false, id: "" });
      toast.success(res.message, {
        position: toast.POSITION.TOP_CENTER,
      });

      setFormData(initialFormData);

      setCurrentUpdatedProduct(null);

      setTimeout(() => {
        router.push("/admin-view/doctors-list");
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
        <div className="xl:w-[85%] 2xl:w-[75%] m-auto space-y-8 shadow-xl px-24 pb-14 pt-10 rounded-lg bg-white relative">
          <div className="flex justify-between">
            <div className="border-2 p-3 h-[60px] mt-7 rounded-md border-none"></div>
            <div className="gap-1 flex flex-col">
              <div className="flex gap-2 font-semibold justify-end">
                <button onClick={() => router.push("/admin-view/doctors-list")}>
                  Doctors List
                </button>
                <span>/</span>
                <button onClick={() => router.push("/")}>Home</button>
              </div>
              <h1 className="text-xl font-semibold text-end">Add Doctor</h1>
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
                Name
              </label>
              <input
                type="text"
                // placeholder="Enter your name"
                className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 mb-7  text-base block bg-white border-gray-300 rounded-md"
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
                Email
              </label>
              <input
                type="email"
                // placeholder="Enter your name"
                className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 mb-7  text-base block bg-white border-gray-300 rounded-md"
                value={formData.email}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    email: event.target.value,
                  });
                }}
              />
            </div>
            <div className="w-full">
              <label className="pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                Phone
              </label>
              <input
                type="text"
                // placeholder="Enter your name"
                className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 mb-7  text-base block bg-white border-gray-300 rounded-md"
                value={formData.phone}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    phone: event.target.value,
                  });
                }}
              />
            </div>

            <div className="w-full">
              <label className="pt-0 pr-2 pb-0  pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                TotalPatients
              </label>
              <input
                type="number"
                // placeholder="Enter your password"
                className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 mb-7  text-base block bg-white border-gray-300 rounded-md"
                value={formData.totalPatients}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    totalPatients: event.target.value,
                  });
                }}
              />
            </div>

            <div className="w-full">
              <label className="pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                Hostpital
              </label>
              <select
                className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 mb-7  text-base block bg-white border-gray-300 rounded-md"
                value={formData.hostpital}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    hostpital: event.target.value,
                  });
                }}
              >
                <option value="lab aid hospital">Lab Aid Hospital</option>
                <option value="square hospital">Square Hospital</option>
              </select>
            </div>

            <div className="w-full">
              <label className="pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                Get Appoinment
              </label>
              <select
                className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 mb-7  text-base block bg-white border-gray-300 rounded-md"
                value={formData.specialization}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    specialization: event.target.value,
                  });
                }}
              >
                <option value="Medicine">Medicine</option>
                <option value="Medical Officer">Madical Officer</option>
              </select>
            </div>
            <div className="w-full">
              <label className="pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                Get Appoinment
              </label>
              <select
                className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 mb-7  text-base block bg-white border-gray-300 rounded-md"
                value={formData.role}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    role: event.target.value,
                  });
                }}
              >
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>

            <div className="w-full">
              <label className="pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                Bio
              </label>
              <textarea
                className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0  text-base block bg-white border-gray-300 rounded-md"
                value={formData.bio}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    bio: event.target.value,
                  });
                }}
              />
            </div>
          </section>
          <div></div>
          <div className="absolute">
            <button
              onClick={handleAddDoctors}
              type="button"
              className="relative text-xl w-[300px] px-8 py-4 ml-4 overflow-hidden font-semibold rounded-lg bg-black text-white 2xl:left-[330px] xl:left-[225px] top-[-7px]"
            >
              Add New Doctor
            </button>
          </div>
        </div>
      </div>
      <Notification />
    </div>
  );
}
