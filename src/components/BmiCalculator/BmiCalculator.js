"use client";

import React, { useState } from "react";

const BmiCalculator = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [age, setAge] = useState(20);
  const [gender, setGender] = useState("male");
  const [bmi, setBMI] = useState(null);
  const [bmiCategory, setBMICategory] = useState(null);

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100;

    if (isNaN(weightInKg) || isNaN(heightInM) || heightInM === 0) {
      alert("Please enter valid weight and height.");
      return;
    }

    const bmiResult = weightInKg / (heightInM * heightInM);
    setBMI(bmiResult.toFixed(2));

    // Determine BMI category
    if (bmiResult < 18.5) {
      setBMICategory("Underweight");
    } else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
      setBMICategory("Healthy Weight");
    } else if (bmiResult >= 25.0 && bmiResult <= 29.9) {
      setBMICategory("Overweight");
    } else {
      setBMICategory("Obesity");
    }
  };

  const handleWeightChange = (value) => {
    setWeight(value);
  };

  const handleHeightChange = (value) => {
    setHeight(value);
  };

  const handleAgeChange = (value) => {
    setAge(value);
  };

  const handleGenderChange = (selectedGender) => {
    setGender(selectedGender);
  };

  return (
    <div className="lg:px-10 py-4">
      <h1 className="text-3xl lg:text-xl text-center lg:text-left font-bold mb-10">
        BMI Calculator
      </h1>
      <main>
        <section className="grid grid-cols-2 gap-8 w-[80%] m-auto mb-10">
          <button
            onClick={() => handleGenderChange("male")}
            className={`border-2 rounded-lg p-5 flex flex-col justify-center items-center ${
              gender === "male" ? "border-black" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-gender-male text-red-600"
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
              <path d="M10 14m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
              <path d="M19 5l-5.4 5.4" />
              <path d="M19 5h-5" />
              <path d="M19 5v5" />
            </svg>
            <p className="mt-2 text-[18px] font-semibold">Male</p>
          </button>
          <button
            onClick={() => handleGenderChange("female")}
            className={`border-2 rounded-lg p-5 flex flex-col justify-center items-center ${
              gender === "female" ? "border-black" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-venus text-red-600"
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
              <path d="M12 9m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
              <path d="M12 14l0 7" />
              <path d="M9 18l6 0" />
            </svg>
            <p className="mt-2 text-[18px] font-semibold">Female</p>
          </button>
        </section>
        <div className="border mb-10 w-[80%] rounded-lg py-10  m-auto">
          <p className=" mb-7 text-[18px] text-center font-semibold">
            Weight (kg)
          </p>
          <div className="lg:w-[30%] w-[50%] m-auto flex bg-slate-200 border-2 gap-5 rounded-3xl py-5 px-5 items-center justify-center">
            <button onClick={() => handleWeightChange(weight - 1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-minus"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
              </svg>
            </button>
            <p className="text-xl font-bold">{weight}</p>
            <button onClick={() => handleWeightChange(weight + 1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-plus"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5l0 14" />
                <path d="M5 12l14 0" />
              </svg>
            </button>
          </div>
        </div>
        <section className="grid grid-cols-2 gap-8 w-[80%] m-auto mb-10">
          <div className="border-2 rounded-lg px-5 py-8 flex flex-col justify-center items-center">
            <label className="mb-7 text-[18px] font-semibold" htmlFor="height">
              Height (cm)
            </label>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-caret-down absolute lg:left-[65px] left-[48px]  top-[-10px]"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 10l6 6l6 -6h-12" />
              </svg>
              <div className="flex bg-slate-200 border-2 gap-5 rounded-3xl py-5 px-1 lg:px-5">
                <button onClick={() => handleHeightChange(height - 1)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-minus"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                  </svg>
                </button>

                <p className="text-xl font-bold">{height}</p>

                <button onClick={() => handleHeightChange(height + 1)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-plus"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="border-2 rounded-lg px-5 py-10 flex flex-col justify-center items-center">
            <label className="mb-7 text-[18px] font-semibold" htmlFor="age">
              Age
            </label>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-caret-down absolute lg:left-[65px] left-[48px]  top-[-10px]"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 10l6 6l6 -6h-12" />
              </svg>
              <div className="flex bg-slate-200 border-2 gap-5 rounded-3xl py-5 px-1 lg:px-5">
                <button onClick={() => handleAgeChange(age - 1)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-minus"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                  </svg>
                </button>

                <p className="text-xl font-bold">{age}</p>

                <button onClick={() => handleAgeChange(age + 1)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-plus"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-center">
          <button
            className="bg-black text-white font-semibold px-6 rounded-3xl py-3 text-xl"
            onClick={calculateBMI}
          >
            Calculate BMI
          </button>
        </div>
        <div className=" text-center text-xl font-semibold w-[80%] m-auto mt-7">
          <p className="mb-4 text-red-600">Your BMI: {bmi || "00"}</p>
          <p className=" text-red-600">
            BMI Category: {bmiCategory || "Calculating.."}
          </p>
        </div>
      </main>
    </div>
  );
};

export default BmiCalculator;
