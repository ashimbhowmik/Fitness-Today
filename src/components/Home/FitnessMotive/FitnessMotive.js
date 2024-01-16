import Image from "next/image";
import React from "react";
import img1 from "../../../assests/motive.jpg";

const FitnessMotive = () => {
  return (
    <main className="2xl:pt-[100px] pt-[80px] pb-[50px] bg-black">
      <section className="2xl:w-[75%] w-[90%] m-auto">
        <div className="2xl:flex xl:flex xl:gap-20">
          <div className="2xl:w-[70%] xl:w-[60%]">
            <h1 className="text-[#0E86A6] 2xl:text-5xl xl:text-4xl text-center xl:text-left 2xl:text-left text-3xl font-bold 2xl:mb-4">
              Why Should Everyone Need Fitness
            </h1>
            <h1 className="text-[#0E86A6] 2xl:text-[42px] xl:text-[30px] mt-2 xl:text-left text-center text-2xl 2xl:text-left font-bold">
              Daily Life
            </h1>
            <div className="mt-7">
              <div className="flex gap-3 mt-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-7 text-[#0E86A6]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="mb-2 text-[#0E86A6] font-bold text-xl">
                    Physical Health
                  </p>
                  <p className="2xl:w-[60%] text-slate-400">
                    Daily fitness routines contribute to improved cardiovascular
                    health, increased strength, flexibility, and better immune
                    function, reducing the risk of chronic diseases and
                    promoting longevity.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-7 text-[#0E86A6]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="mb-2 text-[#0E86A6] font-bold text-xl">
                    Mental Health
                  </p>
                  <p className="2xl:w-[60%] text-slate-400">
                    Exercise releases endorphins, promoting a positive mood,
                    reducing stress, anxiety, and depression. Daily fitness is a
                    natural way to boost mental health and enhance cognitive
                    function.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-7 text-[#0E86A6]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="mb-2 text-[#0E86A6] font-bold text-xl">
                    Increased Energy
                  </p>
                  <p className="2xl:w-[60%] text-slate-400">
                    Engaging in daily fitness activities boosts energy levels by
                    improving circulation and enhancing oxygen and nutrient
                    delivery to cells, leading to increased vitality and reduced
                    feelings of fatigue.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:w-[30%] xl:w-[35%]  mt-10 lg:mt-0 relative">
            <Image src={img1} alt="" objectFit="cover" className="rounded-xl" />
            <div className="absolute inset-0 bg-black opacity-50 xl:w-[full]"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FitnessMotive;
