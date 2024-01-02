"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DeleteButton from "../CommonListing/DeleteButton";
import { toast } from "react-toastify";
import Notification from "@/components/Notification/Notification";
import { doctorListed } from "@/services/doctors";

const DoctorsList = ({ data }) => {
  const router = useRouter();

  const [filter, setFilter] = useState("all");

  const [searchTerm, setSearchTerm] = useState("");

  const handleUpdateRole = async (userId, newRole) => {
    if (data?._id === userId) {
      toast.error("You cannot update your own role", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    } else {
      const updatedUser = {
        _id: userId,
        role: newRole,
      };

      const res = await doctorListed(updatedUser);

      if (res.success) {
        toast.success("Doctors Status is Changed", {
          position: toast.POSITION.TOP_CENTER,
        });
        router.refresh();
      } else {
        toast.error("Can't Delete this Doctor", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  };

  useEffect(() => {
    router.refresh();
  }, []);

  const filteredData = data
    ?.filter((item) => {
      if (filter === "all") {
        return true;
      }
      return item.role === filter;
    })
    ?.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <section className=" mt-[100px] px-24">
      <div className="mt-14 flex justify-between items-center">
        <div className="flex shadow-md font-semibold w-[310px] rounded-md">
          <button
            className={`rounded-l-md px-10 py-3 border-r-[1px] border-black ${
              filter === "available" ? "bg-[#523EE8] text-white" : ""
            }`}
            onClick={() => setFilter("available")}
          >
            Available
          </button>
          <button
            className={`rounded-r-md px-10 py-3 ${
              filter === "unavailable" ? "bg-[#523EE8] text-white" : ""
            }`}
            onClick={() => setFilter("unavailable")}
          >
            Unavailable
          </button>
        </div>
        <div>
          <div className="flex shadow-sm">
            <input
              type="text"
              placeholder="Search by Name"
              className="border py-[10px] pl-10 px-24 text-sm rounded-lg !rounded-e-none sm:w-auto focus:outline-none bg-white text-black focus:dark:border-sky-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="  bg-blue-400 py-[9px] px-3 rounded-lg !rounded-s-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[80px]">
        <div className="w-full bg-white shadow-md rounded-lg">
          <table className="w-full">
            <thead className="">
              <tr className="text-center text-[18px] border-b">
                <th className="py-3">Photo</th>
                <th className="w-[20%] ">Name</th>
                <th className="w-[25%] ">Email</th>
                <th className="w-[13%] ">Status</th>
                <th className="w-[19%] "></th>
                <th className="w-[13%] ">Delete</th>
              </tr>
            </thead>
            <tbody>
              {filteredData?.map((item) => (
                <tr className="text-center border-b" key={item?._id}>
                  <td className=" flex justify-center py-3">
                    <img
                      src={item?.imageUrl}
                      alt=""
                      className="h-[50px] w-[50px] rounded-xl"
                    />
                  </td>
                  <td className="w-[20%] ">{item.name}</td>
                  <td className="w-[25%] ">{item.email}</td>
                  <td className="w-[13%] ">
                    <p
                      className={` w-[100px] mx-auto py-1 rounded-lg ${
                        item?.role === "available"
                          ? "bg-green-400 text-green-800 "
                          : item.role === "unavailable"
                          ? "bg-red-300 text-red-800"
                          : ""
                      }`}
                    >
                      {item.role}
                    </p>
                  </td>
                  <td className="w-[19%] ">
                    {!item || item.role === "available" ? (
                      <>
                        <div className="flex justify-center gap-4">
                          <button
                            onClick={() =>
                              handleUpdateRole(item._id, "unavailable")
                            }
                            disabled={item.role === "unavailable"}
                            className="w-[115px] bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 px-3 py-1 rounded-md text-white cursor-pointer"
                          >
                            Unavailable
                          </button>
                        </div>
                      </>
                    ) : null}

                    {!item || item.role === "unavailable" ? (
                      <>
                        <div className="flex justify-center gap-4">
                          <button
                            onClick={() =>
                              handleUpdateRole(item._id, "available")
                            }
                            disabled={item.role === "available"}
                            className="w-[115px]  bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 px-3 py-1 rounded-md text-white cursor-pointer "
                          >
                            Available
                          </button>
                        </div>
                      </>
                    ) : null}
                  </td>
                  <td className="w-[13%] ">
                    <DeleteButton item={item} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Notification />
    </section>
  );
};

export default DoctorsList;
