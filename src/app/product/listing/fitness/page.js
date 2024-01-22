"use client";

import ArmExercise from "@/components/FitnessRander/ArmExercise/ArmExercise";
import BodyExercise from "@/components/FitnessRander/BodyExercise/BodyExercise";
import LegExercise from "@/components/FitnessRander/LegExercise/LegExercise";
import Footer from "@/components/Footer/Footer";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import img2 from "../../../../assests/img2.jpg";
import img1 from "../../../../assests/dada1.jpg";

import {
  getArmsExercise,
  getBodyExercise,
  getLegExercise,
} from "@/services/exercise";
import PageLoader from "@/components/Loader/PageLoader/PageLoader";

const Fitness = () => {
  const [view, setView] = useState("armExercise");
  const [getALlLeg, setGetALlLeg] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArmsData = async () => {
      try {
        setTimeout(async () => {
          const response = await getLegExercise();
          setGetALlLeg(response.data || []);
          setLoading(false); // Set loading to false when data is loaded
        }, 700);
      } catch (error) {
        console.error("Error fetching arms data:", error);
      }
    };

    fetchArmsData();
  }, []);

  const [allArmsData, setAllArmsData] = useState([]);
  useEffect(() => {
    const fetchArmsData = async () => {
      try {
        setTimeout(async () => {
          const response = await getArmsExercise();
          setAllArmsData(response.data || []);
          setLoading(false); // Set loading to false when data is loaded
        }, 700);
      } catch (error) {
        console.error("Error fetching arms data:", error);
      }
    };

    fetchArmsData();
  }, []);

  const [getAllBody, setAgetAllBody] = useState([]);
  useEffect(() => {
    const fetchArmsData = async () => {
      try {
        setTimeout(async () => {
          const response = await getBodyExercise();
          setAgetAllBody(response.data || []);
          setLoading(false); // Set loading to false when data is loaded
        }, 700);
      } catch (error) {
        console.error("Error fetching arms data:", error);
      }
    };

    fetchArmsData();
  }, []);
  return (
    <div>
      {loading ? ( // Conditionally render the loader
        <>
          <div className="w-full h-screen flex justify-center items-center">
            <div>
              <PageLoader />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="lg:h-[550px] h-[300px]">
            <Image
              src={img2}
              alt=""
              fill={false}
              className="h-full w-full object-cover"
            ></Image>
          </div>
          <section>
            <div className="">
              <div className="bg-black lg:text-xl w-full text-white grid grid-cols-3 ">
                <button
                  className={` 2xl:px-[200px]  2xl:py-[15px] ${
                    view === "armExercise" ? "bg-red-600 text-white" : ""
                  }`}
                  onClick={() => {
                    setView("armExercise");
                  }}
                >
                  Arm Exercise
                </button>

                <button
                  className={` 2xl:px-[200px]  2xl:py-[15px] py-5 ${
                    view === "bodyExercise" ? "bg-red-600 text-white" : ""
                  }`}
                  onClick={() => {
                    setView("bodyExercise");
                  }}
                >
                  Weight Loss
                </button>
                <button
                  className={` 2xl:px-[200px]  2xl:py-[15px] py-5 ${
                    view === "legExercise" ? "bg-red-600 text-white" : ""
                  }`}
                  onClick={() => {
                    setView("legExercise");
                  }}
                >
                  Body Building
                </button>
              </div>
              <section className="2xl:px-[200px] 2xl:py-[30px] xl:flex xl:flex-row xl:w-[95%] 2xl:w-full mx-auto  flex flex-col-reverse 2xl:flex 2xl:flex-row justify-center">
                <div className="2xl:w-[75%] xl:w-[75%] p-3">
                  <h1 className="lg:text-4xl text-3xl text-center lg:text-left font-bold mb-10 mt-2">
                    Find Your Suitable Exercise
                  </h1>
                  {view === "armExercise" ? (
                    <ArmExercise data={allArmsData} />
                  ) : view === "bodyExercise" ? (
                    <BodyExercise data={getAllBody} />
                  ) : (
                    <LegExercise data={getALlLeg} />
                  )}
                </div>
                <div className="lg:w-[25%] w-[95%] hidden lg:block mx-auto mt-5">
                  <section className="flex gap-4">
                    <div className="flex items-center mt-2">
                      <Image
                        src={img1}
                        alt=""
                        fill={false}
                        className="2xl:w-[100px] 2xl:h-[100px] xl:w-[100px] xl:h-[100px] border-4 border-red-500 rounded-full"
                      ></Image>
                    </div>
                    <div className="flex flex-col gap-1 ">
                      <h1 className="text-xl font-bold">
                        Medically reviewed by
                      </h1>
                      <p className="text-xl font-bold text-red-600">
                        Dr. Purna Chandra Das
                      </p>
                      <p className="font-bold text-red-600">
                        MBBS, Medical Officer
                      </p>
                      <p className="font-bold">Updated on - December 28,2023</p>
                    </div>
                  </section>
                  <div className="h-[3px] bg-black mt-5 lg:w-[97%]"></div>
                </div>
              </section>
            </div>
          </section>
          <Footer></Footer>
        </>
      )}
    </div>
  );
};
export default Fitness;
