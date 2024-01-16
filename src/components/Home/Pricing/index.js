import { allRegisterUsers } from "@/services/allregusers";
import { getAllOrder } from "@/services/cart";
import { getAllDoctors } from "@/services/doctors";
import { getAllAdminProducts } from "@/services/product";
import { getAllAppoinment } from "@/services/userappoinment";
import React from "react";
import TotalList from "../ToatalList/TotalList";

export default async function Pricing() {
  const totalOrderCollection = await getAllOrder();
  const totalUserFind = await allRegisterUsers();
  const totalProductCollection = await getAllAdminProducts();
  const totalDoctorCollection = await getAllDoctors();
  const totalAppoinmentCollection = await getAllAppoinment();
  return (
    <div className="flex flex-col w-full bg-black">
      <section className=" ">
        <div className="xl:w-[90%] xl:mx-auto 2xl:w-full">
          <TotalList
            orderData={totalOrderCollection && totalOrderCollection.data}
            userData={totalUserFind && totalUserFind.data}
            appointmentData={
              totalAppoinmentCollection && totalAppoinmentCollection.data
            }
            productData={totalProductCollection && totalProductCollection.data}
            dcotorData={totalDoctorCollection && totalDoctorCollection.data}
          ></TotalList>
        </div>
      </section>
    </div>
  );
}
