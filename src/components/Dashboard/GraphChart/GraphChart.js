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
      series: [0, 0],
      labels: ["Total Sell Cost", "Total Cost"],
    },
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
    <div>
      <section>
        <div>
          <React.Suspense>
            {typeof window !== "undefined" &&
              userData &&
              orderData &&
              appointmentData && (
                <Chart
                  options={state.options}
                  series={state.series}
                  type="area"
                  width="500"
                />
              )}
          </React.Suspense>
        </div>
      </section>
      <section className="flex">
        <div>
          <React.Suspense>
            {typeof window !== "undefined" && orderData && (
              <Chart
                options={orderstate.options}
                series={orderstate.series}
                type="bar"
                width="500"
              />
            )}
          </React.Suspense>
        </div>
        <div>
          <React.Suspense>
            {typeof window !== "undefined" && productData && orderData && (
              <Chart
                options={pstate.options}
                series={pstate.series}
                type="bar"
                width="380"
              />
            )}
          </React.Suspense>
        </div>
        <div>
          <React.Suspense>
            {typeof window !== "undefined" && productData && orderData && (
              <Chart
                options={dstate.options}
                series={dstate.series}
                type="donut"
                width="380"
              />
            )}
          </React.Suspense>
        </div>
      </section>
    </div>
  );
};

export default GraphChart;
