"use client";
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

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

  return (
    <div>
      <section>
        <div>
          {userData && orderData && appointmentData && (
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="500"
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default GraphChart;
