"use client";
import React, { useState, useEffect } from "react";

const GraphChart = ({
  userData,
  orderData,
  appointmentData,
  productData,
  dcotorData,
}) => {
  // Dynamically import Chart component on the client side
  const Chart = React.lazy(() => import("react-apexcharts"));

  // Graph 1
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "Total User",
          "Total Appointments",
          "Total Orders",
          "Total Products",
          "Total Doctors",
        ],
      },
    },
    series: [
      {
        name: "series-1",
        data: [0, 0, 0, 0, 0],
      },
    ],
  });

  useEffect(() => {
    const newData = [
      orderData?.length || 0, // Total number of orders
      userData?.length || 0, // Total number of users
      appointmentData?.length || 0, // Total number of appointments
      productData?.length || 0, // Total number of appointments
      dcotorData?.length || 0, // Total number of appointments
    ];

    setState((prev) => ({
      ...prev,
      series: [{ ...prev.series[0], data: newData }],
    }));
  }, [userData, orderData, appointmentData]);

  // Graph 2

  const [dstate, setDstate] = useState({
    options: {
      series: [0, 0],
      labels: ["Price Drop", "No Price Drop"],
    },
  });

  useEffect(() => {
    if (productData && Array.isArray(productData)) {
      const positiveCount =
        productData?.filter((item) => item?.priceDrop > 0)?.length || 0;
      const negativeCount =
        productData?.filter((item) => item?.priceDrop <= 0)?.length || 0;

      setDstate((prev) => ({
        ...prev,
        series: [positiveCount, negativeCount],
      }));
    }
  }, [productData]);

  // Graph 3

  const [orderstate, setOrderstate] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Delivered", "Pending"],
      },
    },
    series: [
      {
        name: "series-2",
        data: [0, 0],
      },
    ],
  });

  useEffect(() => {
    if (orderData && Array.isArray(orderData)) {
      const deliveredCount =
        orderData?.filter((item) => item?.orders === "Delivered")?.length || 0;
      const pendingCount =
        orderData?.filter((item) => item?.orders === "Pending")?.length || 0;

      const newOrder = [
        deliveredCount, // Total number of users
        pendingCount,
      ];

      setOrderstate((prev) => ({
        ...prev,
        series: [{ ...prev.series[0], data: newOrder }],
      }));
    }
  }, [orderData]);

  //  Graph 4
  const [pstate, setPstate] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Total Sell Cost", "Total cost"],
      },
    },
    series: [
      {
        name: "series-2",
        data: [0, 0],
      },
    ],
  });

  useEffect(() => {
    if (productData && orderData && Array.isArray(productData, orderData)) {
      const totalOrderCost = orderData?.reduce((total, item) => {
        const product = productData?.find(
          (productItem) => productItem?._id === item?.productID
        );
        const productPrice = product?.price || 0;
        return total + productPrice;
      }, 0);
      const totalProductCost = productData?.reduce((total, item) => {
        return total + (item.price || 0);
      }, 0);

      const newTotalPrice = [
        totalOrderCost, // Total number of users
        totalProductCost,
      ];
      setPstate((prev) => ({
        ...prev,
        series: [{ ...prev.series[0], data: newTotalPrice }],
      }));
    }
  }, [productData, orderData]);

  return (
    <div className="">
      <section className=" justify-center 2xl:gap-14 mt-10">
        <div className="">
          <div className="flex justify-between mb-10">
            <div className="flex flex-col gap-5 p-[32px]  shadow-md rounded-lg bg-white">
              <h1 className="text-xl font-bold text-center ">Total Activity</h1>
              <div className="h-[2px] bg-black w-full"></div>
              <React.Suspense>
                {typeof window !== "undefined" &&
                  userData &&
                  orderData &&
                  appointmentData && (
                    <Chart
                      options={state.options}
                      series={state.series}
                      type="area"
                      width="400"
                    />
                  )}
              </React.Suspense>
            </div>
            <div className="flex flex-col gap-5 p-[32px]  shadow-md rounded-lg bg-white">
              <h1 className="text-xl font-bold text-center ">Total Panding</h1>
              <div className="h-[2px] bg-black w-full"></div>
              <React.Suspense>
                {typeof window !== "undefined" && orderData && (
                  <Chart
                    options={orderstate.options}
                    series={orderstate.series}
                    type="bar"
                    width="400"
                  />
                )}
              </React.Suspense>
            </div>
            <div className="hidden 2xl:block">
              <div className="flex flex-col gap-5 p-[32px]  shadow-md rounded-lg bg-white">
                <h1 className="text-center text-xl font-bold">Total Price</h1>
                <div className="h-[2px] bg-black w-full"></div>
                <React.Suspense>
                  {typeof window !== "undefined" &&
                    productData &&
                    orderData && (
                      <Chart
                        options={pstate.options}
                        series={pstate.series}
                        type="bar"
                        width="400"
                      />
                    )}
                </React.Suspense>
              </div>
            </div>
          </div>

          <div className="flex justify-between 2xl:justify-normal 2xl:gap-9">
            <div className="hidden 2xl:w-[70%] 2xl:block">
              <section className="2xl:flex  rounded-lg 2xl:px-0 gap-10">
                <div className="flex-1 rounded-lg xl:mb-10 2xl:mb-0">
                  {userData && userData?.length > 0 && (
                    <table className="table-auto rounded-lg w-full">
                      <thead>
                        <tr className="text-center bg-gray-200">
                          <th></th>
                          <th className="py-5">Name</th>
                          <th className="py-5">Email</th>
                          <th className="py-5">Role</th>
                        </tr>
                      </thead>
                      <tbody className="shadow-md rounded-lg bg-white">
                        {userData?.slice(0, 5)?.map((user, index) => (
                          <tr key={index} className="text-center border-b">
                            <td className="py-6 px-3">{index + 1}</td>
                            <td className="py-6 px-3 ">{user.name}</td>
                            <td className="py-6 px-3">{user.email}</td>
                            <td className="py-6 px-3">{user.role}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </section>
            </div>
            <div className="flex flex-col gap-5 p-[32px] shadow-md rounded-lg bg-white">
              <h1 className="text-xl font-bold text-center">
                Total Drop Price
              </h1>
              <div className="h-[2px] bg-black w-full"></div>
              <React.Suspense>
                {typeof window !== "undefined" && productData && orderData && (
                  <Chart
                    options={dstate.options}
                    series={dstate.series}
                    type="donut"
                    width="400"
                  />
                )}
              </React.Suspense>
            </div>
            <div className="flex 2xl:hidden flex-col gap-5 p-[32px]  shadow-md rounded-lg bg-white">
              <h1 className="text-center text-xl font-bold">Total Price</h1>
              <div className="h-[2px] bg-black w-full"></div>
              <React.Suspense>
                {typeof window !== "undefined" && productData && orderData && (
                  <Chart
                    options={pstate.options}
                    series={pstate.series}
                    type="bar"
                    width="400"
                  />
                )}
              </React.Suspense>
            </div>
          </div>
        </div>
      </section>
      <section className="2xl:flex 2xl:hidden rounded-lg 2xl:px-0 gap-10 mt-10">
        <div className="flex-1 rounded-lg xl:mb-10 2xl:mb-0">
          {userData && userData?.length > 0 && (
            <table className="table-auto rounded-lg w-full">
              <thead>
                <tr className="text-center bg-gray-200">
                  <th></th>
                  <th className="py-5">Name</th>
                  <th className="py-5">Email</th>
                  <th className="py-5">Role</th>
                </tr>
              </thead>
              <tbody className="shadow-md rounded-lg bg-white">
                {userData?.slice(0, 8)?.map((user, index) => (
                  <tr key={index} className="text-center border-b">
                    <td className="py-6 px-3">{index + 1}</td>
                    <td className="py-6 px-3 ">{user.name}</td>
                    <td className="py-6 px-3">{user.email}</td>
                    <td className="py-6 px-3">{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </div>
  );
};

export default GraphChart;
