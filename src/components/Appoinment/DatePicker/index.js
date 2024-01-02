"use client";
import React from "react";
// import { useState } from "react";
import { format } from "date-fns";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function DoctorsClient({ selected, setSelected }) {
  const currentDate = selected || new Date();
  return (
    <section className="">
      <h1>hi</h1>
      <DayPicker mode="single" selected={selected} onSelect={setSelected} />
      <p>You have selected datae : {format(currentDate, "PP")}</p>
    </section>
  );
}
