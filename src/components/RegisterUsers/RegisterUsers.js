"use client";

import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Notification from "@/components/Notification/Notification";
import { updateUserRoleChange } from "@/services/allregusers";
import DeleteUser from "../CommonListing/DeleteUser";

const RegisterUsers = ({ data }) => {
  const { user } = useContext(GlobalContext);
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");

  const handleUpdateRole = async (userId, newRole) => {
    if (user?._id === userId) {
      toast.error("You cannot update your own role", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    } else {
      const updatedUser = {
        _id: userId,
        role: newRole,
      };

      const res = updateUserRoleChange(updatedUser);

      if (res.success) {
        toast.success("User Role Changed", {
          position: toast.POSITION.TOP_CENTER,
        });
        router.refresh();
      } else {
        toast.success("User Role Changed", {
          position: toast.POSITION.TOP_CENTER,
        });
        router.refresh();
      }
    }
  };

  useEffect(() => {
    router.refresh();
  }, []);

  const filteredData = data?.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = filteredData?.sort((a, b) => {
    const roleOrder = {
      developer: 1,
      admin: 2,
      customer: 3,
    };

    const roleA = roleOrder[a.role] || 0;
    const roleB = roleOrder[b.role] || 0;

    if (roleA === roleB) {
      return a.name.localeCompare(b.name);
    }

    return roleA - roleB;
  });

  return (
    <section className="py-12 sm:py-16 mt-[100px] w-[90%] m-auto">
      <div>
        <div className="flex w-[95%] m-auto mb-7">
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
        <div className=" w-[95%] m-auto bg-white shadow-md rounded-lg">
          <table className="w-full">
            <thead className="">
              <tr className="text-center text-[18px] border-b">
                <th className="w-[5%]"></th>
                <th className="w-[20%] py-3">Name</th>
                <th className="w-[25%] ">Email</th>
                <th className="w-[13%] ">Status</th>
                <th className="w-[19%] "></th>
                <th className="w-[13%] ">Delete</th>
              </tr>
            </thead>
            <tbody>
              {sortedData?.map((item, index) => (
                <tr className="text-center border-b" key={item._id}>
                  <td className="w-[5%]">{index + 1}</td>
                  <td className="w-[20%] py-7">{item.name}</td>
                  <td className="w-[25%] ">{item.email}</td>
                  <td className="w-[13%] ">
                    <p
                      className={` w-[100px] mx-auto py-1 rounded-lg ${
                        item.role === "admin"
                          ? "bg-green-400 text-green-800 "
                          : item.role === "developer"
                          ? "bg-red-300 text-red-800"
                          : item.role === "customer"
                          ? "bg-sky-300 text-sky-800"
                          : ""
                      }`}
                    >
                      {item.role}
                    </p>
                  </td>
                  <td className="w-[19%]">
                    {!user || user?.role === "admin" ? (
                      <>
                        {!item || item?.role === "admin" ? (
                          <>
                            <button
                              className="w-[115px] bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 px-3 py-1 rounded-md text-white cursor-pointer"
                              onClick={() =>
                                handleUpdateRole(item._id, "customer")
                              }
                            >
                              Customer
                            </button>
                          </>
                        ) : null}
                        {!item || item.role === "customer" ? (
                          <>
                            <button
                              className="w-[115px] bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 px-3 py-1 rounded-md text-white cursor-pointer"
                              onClick={() =>
                                handleUpdateRole(item._id, "admin")
                              }
                            >
                              Admin
                            </button>
                          </>
                        ) : null}
                      </>
                    ) : null}

                    {!user || user.role === "developer" ? (
                      <>
                        <>
                          {!item || item.role === "admin" ? (
                            <>
                              <button
                                className="w-[115px] bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 px-3 py-1 rounded-md text-white cursor-pointer"
                                onClick={() =>
                                  handleUpdateRole(item._id, "customer")
                                }
                              >
                                Customer
                              </button>
                            </>
                          ) : null}
                          {!item || item.role === "customer" ? (
                            <>
                              <button
                                className="w-[115px] bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 px-3 py-1 rounded-md text-white cursor-pointer"
                                onClick={() =>
                                  handleUpdateRole(item._id, "admin")
                                }
                              >
                                Admin
                              </button>
                            </>
                          ) : null}
                        </>
                      </>
                    ) : null}
                  </td>

                  <td className="w-[13%] ">
                    <DeleteUser item={item} />
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

export default RegisterUsers;
