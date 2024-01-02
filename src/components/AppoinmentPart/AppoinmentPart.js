"use client";
import React, { useContext, useEffect, useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { GlobalContext } from "@/context/GlobalContext";
import { useRouter } from "next/navigation";
import { newAppoinmentUser } from "@/services/userappoinment";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import Notification from "../Notification/Notification";
import Footer from "../Footer/Footer";
import AppoinmentBanner from "./AppoinmentBanner/AppoinmentBanner";
import { HashLoader } from "react-spinners";
import BmiCalculator from "../BmiCalculator/BmiCalculator";

// Initial Form Data
const initialFormData = {
  phone: "", // Add your other form fields here
};

const AppoinmentPart = ({ item }) => {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormData);
  const { user, setComponentLevelLoader } = useContext(GlobalContext);
  const [selected, setSelected] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  async function handleAddAppoinment() {
    setComponentLevelLoader({ loading: true, id: "" });

    // Check if the selected date is earlier than the current date
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Set time to midnight

    const selectedDate = selected;
    selectedDate.setHours(0, 0, 0, 0); // Set time to midnight

    console.log("current", currentDate);
    console.log("selected", selectedDate);
    if (selectedDate < currentDate || selectedDate === currentDate) {
      toast.error("Please select a valid date.", {
        position: toast.POSITION.TOP_CENTER,
      });
      setComponentLevelLoader({ loading: false, id: "" });
      return;
    }

    // Update formData with the required fields
    const updatedFormData = {
      userID: user?._id || "",
      doctorName: item.name || "",
      name: user?.name || "",
      dateOf: selected.toLocaleDateString("en-GB"),
      time: selectedTime,
      ...formData, // Include other form fields
    };

    // setPageLevelLoader(true);
    const res = await newAppoinmentUser(updatedFormData);

    if (res.success) {
      // setPageLevelLoader(false);
      toast.success(res.message, {
        position: toast.POSITION.TOP_CENTER,
      });

      setComponentLevelLoader({ loading: false, id: "" });

      setFormData(initialFormData);

      setTimeout(() => {
        router.push("/product/listing/appoinments");
      }, 1000);
    } else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      setComponentLevelLoader({ loading: false, id: "" });
      setFormData(initialFormData);
    }
    // setPageLevelLoader(false);

    console.log(res);
  }

  return (
    <main>
      <section className="lg:px-[120px] lg:py-[90px]">
        <AppoinmentBanner key={item._id} item={item}></AppoinmentBanner>
        <h1 className="text-center mt-24 text-2xl font-bold">
          Get Doctor's Appoinment
        </h1>
        <section className="lg:flex mt-14 gap-6">
          <section className="flex-1 bg-slate-100 py-5 rounded-md ">
            <div>
              <div>
                <DayPicker
                  mode="single"
                  selected={selected}
                  onSelect={setSelected}
                  value={selected}
                  className="flex flex-col items-center"
                />
                <p className="text-center text-xl mt-5 text-[#19d3ae] font-bold">
                  You have selected date: {format(selected || new Date(), "PP")}
                </p>
                <section className="lg:px-20 px-10">
                  <div className="flex justify-center items-center">
                    <div className="h-[3px] w-[42%] hidden lg:block bg-black"></div>
                    <p className="my-10 mx-2  text-3xl font-bold lg:text-[16px]">
                      Visiting Our
                    </p>
                    <div className="h-[3px] w-[42%] hidden lg:block bg-black"></div>
                  </div>
                  <div className="mb-10 flex justify-between">
                    <h1 className="font-bold text-xl">
                      Patient name : {user?.name}
                    </h1>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <button
                      onClick={() => setSelectedTime("9:00 AM")}
                      className={`${
                        selectedTime === "9:00 AM"
                          ? "btn-primary "
                          : "btn-outline"
                      } btn btn-primary`}
                    >
                      9:00 AM
                    </button>
                    <button
                      onClick={() => setSelectedTime("10:00 AM")}
                      className={`${
                        selectedTime === "10:00 AM"
                          ? "btn-primary"
                          : "btn-outline"
                      } btn btn-primary`}
                    >
                      10:00 AM
                    </button>
                    <button
                      onClick={() => setSelectedTime("12:00 PM")}
                      className={`${
                        selectedTime === "12:00 PM"
                          ? "btn-primary"
                          : "btn-outline"
                      } btn btn-primary`}
                    >
                      12:00 AM
                    </button>
                    <button
                      onClick={() => setSelectedTime("3:00 PM")}
                      className={`${
                        selectedTime === "3:00 PM"
                          ? "btn-primary"
                          : "btn-outline"
                      } btn btn-primary`}
                    >
                      3:00 PM
                    </button>
                    <button
                      onClick={() => setSelectedTime("4:00 PM")}
                      className={`${
                        selectedTime === "4:00 PM"
                          ? "btn-primary"
                          : "btn-outline"
                      } btn btn-primary`}
                    >
                      4:00 PM
                    </button>
                    <button
                      onClick={() => setSelectedTime("6:00 PM")}
                      className={`${
                        selectedTime === "6:00 PM"
                          ? "btn-primary"
                          : "btn-outline"
                      } btn btn-primary`}
                    >
                      6:00 PM
                    </button>
                    <button
                      onClick={() => setSelectedTime("7:00 PM")}
                      className={`${
                        selectedTime === "7:00 PM"
                          ? "btn-primary"
                          : "btn-outline"
                      } btn btn-primary`}
                    >
                      7:00 PM
                    </button>
                    <button
                      onClick={() => setSelectedTime("8:00 PM")}
                      className={`${
                        selectedTime === "8:00 PM"
                          ? "btn-primary"
                          : "btn-outline"
                      } btn btn-primary`}
                    >
                      8:00 PM
                    </button>
                    <button
                      onClick={() => setSelectedTime("9:00 PM")}
                      className={`${
                        selectedTime === "9:00 PM"
                          ? "btn-primary"
                          : "btn-outline"
                      } btn btn-primary`}
                    >
                      9:00 PM
                    </button>
                  </div>
                  <div className="w-full lg:flex lg:flex-row flex flex-col-reverse mt-7 gap-10">
                    <div className="flex-1">
                      <label className="block text-xl font-bold  text-gray-700">
                        Your Contact Number
                      </label>
                      <input
                        type="text"
                        placeholder="phone"
                        className="input input-bordered w-full max-w-xs bg-white border-black mt-4"
                        value={formData.phone}
                        onChange={(event) => {
                          setFormData({
                            ...formData,
                            phone: event.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                      {/* <h1 className="block text-xl font-bold  text-gray-700">
                        Your Name
                      </h1>
                      <p className="mt-4">{item.name}</p> */}
                      <div className="  mt-9  ">
                        <p className="text-red-600 font-bold text-2xl">
                          {selectedTime || "00:00"}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className="flex justify-center items-center mt-10 mb-6">
              <button
                onClick={handleAddAppoinment}
                type="button"
                className="px-5 py-2 lg:py-3 font-bold text-white lg:w-[300px] bg-sky-500 hover:bg-cyan-500 ease-in duration-300 rounded-xl "
              >
                Get Appointment
              </button>
            </div>
          </section>
          <div className="flex-1 bg-slate-100 py-5 rounded-md ">
            <BmiCalculator></BmiCalculator>
          </div>
        </section>
        <Notification></Notification>
      </section>
      <Footer></Footer>
    </main>
  );
};

export default AppoinmentPart;
