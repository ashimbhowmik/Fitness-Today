"use client";
import React, { useState, useEffect } from "react";

const GraphChart = ({ userData, orderData, appointmentData, productData }) => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Total User", "Total Appointment", "Total Order"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [0, 0, 0],
      },
    ],
  });

  useEffect(() => {
    const newData = [
      userData?.length || 0, // Total number of users
      appointmentData?.length || 0, // Total number of appointments
      orderData?.length || 0, // Total number of orders
    ];

    setState((prev) => ({
      ...prev,
      series: [{ ...prev.series[0], data: newData }],
    }));
  }, [userData, orderData, appointmentData]);

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

  // Dynamically import Chart component on the client side
  const Chart = React.lazy(() => import("react-apexcharts"));

  return (
    <div>
      <section>
        <div>
          <React.Suspense fallback={<div>Loading...</div>}>
            {typeof window !== "undefined" &&
              userData &&
              orderData &&
              appointmentData && (
                <Chart
                  options={state.options}
                  series={state.series}
                  type="bar"
                  width="500"
                />
              )}
          </React.Suspense>
        </div>
        <div>
          <React.Suspense fallback={<div>Loading...</div>}>
            {typeof window !== "undefined" && productData && (
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
