import React from "react";
import { getAllDoctors } from "@/services/doctors";
import DoctorsClient from "@/components/Appoinment/DoctorsClient";

export default async function page() {
  const allAdminDoctors = await getAllDoctors();

  return (
    <div className="">
      <DoctorsClient
        data={allAdminDoctors && allAdminDoctors.data}
      ></DoctorsClient>
    </div>
  );
}
