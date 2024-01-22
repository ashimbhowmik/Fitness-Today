import React from "react";

const TotalCollection = ({
  dcotorData,
  orderData,
  userData,
  productData,
  appointmentData,
}) => {
  return (
    <div>
      <section className="grid grid-cols-3 2xl:grid-cols-5 gap-5 overflow-x-hidden">
        <div className="flex flex-col bg-white justify-center items-center p-10 shadow-md rounded-lg">
          <p className="text-3xl mb-2 text-red-500 font-bold">
            {dcotorData?.length}
          </p>
          <p className="font-bold">Total Doctor</p>
        </div>
        <div className="flex flex-col bg-white  justify-center items-center p-10 shadow-md rounded-lg">
          <p className="text-3xl mb-2 text-red-500 font-bold">
            {orderData?.length}
          </p>
          <p className="font-bold ">Total Order</p>
        </div>
        <div className="flex flex-col bg-white  justify-center items-center p-10 shadow-md rounded-lg">
          <p className="text-3xl mb-2 text-red-500 font-bold">
            {userData?.length}
          </p>
          <p className="font-bold ">Total User</p>
        </div>
        <div className="flex flex-col bg-white  justify-center items-center p-10 shadow-md rounded-lg">
          <p className="text-3xl mb-2 text-red-500 font-bold">
            {productData?.length}
          </p>
          <p className="font-bold ">Total Product</p>
        </div>
        <div className="flex flex-col bg-white  justify-center items-center p-10 shadow-md rounded-lg">
          <p className="text-3xl mb-2 text-red-500 font-bold">
            {appointmentData?.length}
          </p>
          <p className="font-bold">Total Appointment</p>
        </div>
      </section>
    </div>
  );
};

export default TotalCollection;
