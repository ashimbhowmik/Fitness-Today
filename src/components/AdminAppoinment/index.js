"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Notification from "../Notification/Notification";
import AppoinmentDelete from "./AppoinmentDelete";

export default function AdminAppoinment({ data }) {
  const router = useRouter();
  const [sortedAppointments, setSortedAppointments] = useState([]);

  useEffect(() => {
    router.refresh();
  }, []);

  useEffect(() => {
    // Sort appointments by date in ascending order
    const sortedData = [...data]?.sort((a, b) => {
      const dateA = parseDate(a.dateOf);
      const dateB = parseDate(b.dateOf);
      return dateA - dateB;
    });

    setSortedAppointments(sortedData);
  }, [data]);

  // Function to parse date in "DD/MM/YYYY" format
  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return new Date(`${year}-${month}-${day}`);
  };

  return (
    <section className="py-12 sm:py-16 mt-20">
      <div className="mx-auto px-4 md:px-8  xl:px-32 ">
        <div>
          {sortedAppointments && sortedAppointments.length ? (
            <div className="mt-10">
              <div className="w-full bg-white shadow-md rounded-lg overflow-x-auto">
                <table className="w-full">
                  <thead className="">
                    <tr className="text-center text-[18px] border-b">
                      <th className="pl-10"></th>
                      <th className="py-6">Doctor Name</th>
                      <th className="w-[20%]">Name</th>
                      <th className="w-[20%]">Phone</th>
                      <th className="w-[8%]">Date</th>
                      <th className="w-[15%]">Time</th>
                      <th className="w-[8%]">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedAppointments.map((item, index) => (
                      <tr key={item._id} className="text-center border-b">
                        <td className="py-6">{index + 1}</td>
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
          ) : null}
        </div>
      </div>
      <Notification />
    </section>
  );
}
