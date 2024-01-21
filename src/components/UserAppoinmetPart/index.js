"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext, useEffect, useState } from "react";
import AppoinmentDelete from "../AdminAppoinment/AppoinmentDelete";
import { getAllAppoinment } from "@/services/userappoinment";
import Footer from "../Footer/Footer";
import Image from "next/image";
import img from "../../assests/Main+banner.png";
import Notification from "../Notification/Notification";

const UserAppoinmetPart = () => {
  const { user } = useContext(GlobalContext);

  if (!user?.name) {
    return (
      <div className="lg:pt-[100px] pt-[50px]">
        <div className="relative w-full h-[350px] md:h-[500px] lg:h-[500px] xl:h-[500px] 2xl:h-[700px]">
          <Image
            src={img}
            alt=""
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div className="absolute w-full top-[170px] xl:top-[250px] 2xl:top-[350px] text-white lg:pl-10 pl-3">
          <div className="text-black">
            <h1 className="text-2xl md:text-5xl lg:text-5xl xl:text-5xl text-left 2xl:text-6xl font-bold lg:mb-7">
              <p>Please, You Login First</p>
            </h1>
            <p className="mb-3 text-xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold text-left">
              To See Appointment
            </p>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
  const [userAppointments, setUserAppointments] = useState([]);

  useEffect(() => {
    const fetchUserAppointments = async () => {
      if (user?.name) {
        try {
          const response = await getAllAppoinment();
          const appointments = response?.data?.filter(
            (appointment) => appointment?.name === user?.name
          );
          setUserAppointments(appointments || []);
        } catch (error) {
          console.error("Error fetching user appointments:", error);
        }
      }
    };

    fetchUserAppointments();
  }, [user]);

  return (
    <div className="lg:pt-[100px] pt-[50px]">
      <div className="relative h-[300px] md:h-[500px] lg:h-[500px] xl:h-[500px] 2xl:h-[700px]">
        <Image
          src={img}
          alt=""
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="absolute w-full top-[160px] xl:top-[250px] 2xl:top-[350px] text-white lg:pl-10 pl-3">
        <div className="text-black w-[70%] lg:w-full">
          <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-5xl text-left 2xl:text-6xl font-bold lg:mb-7">
            <p>Welcome, {user?.name}!</p>
          </h1>
          <p className="mb-3 hidden lg:block text-xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold text-left">
            Check Your Appointment!
          </p>
        </div>
      </div>

      {userAppointments.length > 0 ? (
        <>
          <h2 className="text-center mt-10 text-3xl font-bold">
            Your Appointments
          </h2>
          <div className="pt-10 pb-14 w-[80%] m-auto">
            <div className="w-full bg-white rounded-lg overflow-x-auto">
              <table className="w-full">
                <thead className="">
                  <tr className="text-center text-[18px] border-b">
                    <th className="py-6">Doctor Name</th>
                    <th className="w-[20%]">Name</th>
                    <th className="w-[20%]">Phone</th>
                    <th className="w-[8%]">Date</th>
                    <th className="w-[15%]">Time</th>
                    <th className="w-[8%]">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {userAppointments.map((item) => (
                    <tr key={item._id} className="text-center border-b">
                      <td className="py-6 md:w-[20%]">{item.doctorName}</td>
                      <td className="w-[20%]">{item.name}</td>
                      <td className="w-[20%]">{item.phone}</td>
                      <td className="w-[8%]">{item.dateOf}</td>
                      <td className="w-[15%]">{item.time}</td>
                      <td className="w-[8%] pr-5">
                        <AppoinmentDelete
                          key={item._id}
                          item={item}
                        ></AppoinmentDelete>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <div className="py-20">
          <h1 className="text-center text-4xl font-bold ">
            You haven't made a appointment yet!
          </h1>
        </div>
      )}
      <Notification />
      <Footer></Footer>
    </div>
  );
};

export default UserAppoinmetPart;
