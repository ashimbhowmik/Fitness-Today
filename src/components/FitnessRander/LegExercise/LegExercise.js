"use client";

import React, { useState } from "react";
import GetAllLegData from "../GetAllLegData/Index";

const LegExercise = ({ data }) => {
  const [visibleItems, setVisibleItems] = useState(7);

  const handleShowMore = () => {
    setVisibleItems((prev) => prev + 7);
  };
  return (
    <div className="flex gap-7 flex-col">
      {data.slice(0, visibleItems).map((item, index) => (
        <GetAllLegData key={item._id} index={index + 1} item={item} />
      ))}
      {visibleItems < data.length && (
        <div className="flex justify-center items-cent">
          <button onClick={handleShowMore} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-chevrons-down"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 7l5 5l5 -5" />
              <path d="M7 13l5 5l5 -5" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default LegExercise;
