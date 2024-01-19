"use client";

import Arms from "@/components/AddExercise/Arms";
import Body from "@/components/AddExercise/Body";
import Leg from "@/components/AddExercise/Leg";
import React, { useState } from "react";

const AdminAddExercise = () => {
  const [view, setView] = useState("arms");
  return (
    <div>
      <div className="pt-[140px] ">
        <div className="flex gap-5 2xl:ml-[216px] xl:ml-[130px]">
          <button
            className={`px-8 rounded-lg py-2 border ${
              view === "arms" ? "bg-red-500 text-white" : "bg-white text-black"
            }`}
            onClick={() => {
              setView("arms");
            }}
          >
            Arm Exercise
          </button>
          <button
            className={`px-8 rounded-lg py-2 border ${
              view === "body" ? "bg-red-500 text-white" : "bg-white text-black"
            }`}
            onClick={() => {
              setView("body");
            }}
          >
            Weight Loss
          </button>
          <button
            className={`px-8 rounded-lg py-2 border ${
              view === "leg" ? "bg-red-500 text-white" : "bg-white text-black"
            }`}
            onClick={() => {
              setView("leg");
            }}
          >
            Body Building
          </button>
        </div>
        <div>
          {view === "arms" ? <Arms /> : view === "body" ? <Body /> : <Leg />}
        </div>
      </div>
    </div>
  );
};

export default AdminAddExercise;
