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
    <div className="flex flex-col  pt-[150px] pl-[30px]">
      <section className="border">
        <TotalCollection
          dcotorData={totalDoctorCollection && totalDoctorCollection.dcotorData}
          orderData={totalOrderCollection && totalOrderCollection.orderData}
          userData={totalUserFind && totalUserFind.userData}
          productData={
            totalProductCollection && totalProductCollection.productData
          }
          appointmentData={
            totalAppoinmentCollection &&
            totalAppoinmentCollection.appointmentData
          }
        ></TotalCollection>
        <GraphChart
          orderData={totalOrderCollection && totalOrderCollection.data}
          userData={totalUserFind && totalUserFind.data}
          appointmentData={
            totalAppoinmentCollection && totalAppoinmentCollection.data
          }
          productData={totalProductCollection && totalProductCollection.data}
          dcotorData={totalDoctorCollection && totalDoctorCollection.data}
        ></GraphChart>
      </section>
    </div>
  );
}
