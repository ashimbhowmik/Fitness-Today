import GraphChart from "@/components/Dashboard/GraphChart/GraphChart";
import TotalCollection from "@/components/Dashboard/TotalCollection/TotalCollection";
import { allRegisterUsers } from "@/services/allregusers";
import { getAllOrder } from "@/services/cart";
import { getAllDoctors } from "@/services/doctors";
import { getAllAdminProducts } from "@/services/product";
import { getAllAppoinment } from "@/services/userappoinment";
import React from "react";

export default async function AdminView() {
  const totalOrderCollection = await getAllOrder();
  const totalUserFind = await allRegisterUsers();
  const totalProductCollection = await getAllAdminProducts();
  const totalDoctorCollection = await getAllDoctors();
  const totalAppoinmentCollection = await getAllAppoinment();
  return (
    <div className="flex flex-col w-full py-[150px] pl-[30px]">
      <section className=" ">
        <h1 className="text-2xl mb-8 font-bold">Dashboard</h1>
        <div className="">
          <TotalCollection
            orderData={totalOrderCollection && totalOrderCollection.data}
            userData={totalUserFind && totalUserFind.data}
            appointmentData={
              totalAppoinmentCollection && totalAppoinmentCollection.data
            }
            productData={totalProductCollection && totalProductCollection.data}
            dcotorData={totalDoctorCollection && totalDoctorCollection.data}
          ></TotalCollection>
        </div>
        <div>
          <GraphChart
            orderData={totalOrderCollection && totalOrderCollection.data}
            userData={totalUserFind && totalUserFind.data}
            appointmentData={
              totalAppoinmentCollection && totalAppoinmentCollection.data
            }
            productData={totalProductCollection && totalProductCollection.data}
            dcotorData={totalDoctorCollection && totalDoctorCollection.data}
          ></GraphChart>
        </div>
      </section>
    </div>
  );
}
