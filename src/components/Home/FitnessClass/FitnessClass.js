"use client";
import React from "react";
import img from "../../../assests/fatloss.jpg";
import img1 from "../../../assests/yoga.jpg";
import img2 from "../../../assests/bodybulidnig.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const FitnessClass = () => {
  const router = useRouter();
  return (
    <div className="py-[50px]   bg-black">
      <h1 className=" 2xl:w-[75%] xl:w-[90%] w-[90%] mx-auto m-auto text-5xl font-bold mb-10 text-[#0E86A6]">
        Our Program
      </h1>
      <main className="2xl:w-[75%] xl:w-[90%] m-auto w-[90%] mx-auto">
        <section className="grid gap-10 2xl:grid-cols-3 2xl:gap-28 md:grid-cols-2 md:gap-16 lg:grid-cols-3 lg:gap-16 xl:grid-cols-3 xl:gap-16">
          <div className="card z-0 bg-base-100 shadow-xl image-full h-[550px] rounded-xl">
            <figure>
              <Image src={img1} alt="" objectFit="cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title mt-[230px] mb-2 text-white">Arm</h2>
              <p className="text-white">
                Yoga fosters physical and mental well-being through a
                combination of stretches, poses, and mindfulness, enhancing
                flexibility, balance, and reducing stress. Its holistic approach
                contributes to improved overall health and a sense of calm.
              </p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => router.push("/product/listing/fitness")}
                  className="btn btn-info"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-player-track-next-filled"
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
                    <path
                      d="M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z"
                      stroke-width="0"
                      fill="currentColor"
                    />
                    <path
                      d="M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z"
                      stroke-width="0"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="card z-0  bg-base-100 shadow-xl image-full h-[550px] mb-6 lg:mb-0">
            <figure>
              <Image src={img2} alt="" objectFit="cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title mt-[230px] mb-2 text-white">
                Body-Building
              </h2>
              <p className="text-white">
                Bodybuilding promotes increased muscle mass and strength,
                enhancing overall physical performance and functional capacity.
                as muscle tissue plays a key potentially aiding in weight
                management and overall body composition.
              </p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => router.push("/product/listing/fitness")}
                  className="btn btn-info"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-player-track-next-filled"
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
                    <path
                      d="M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z"
                      stroke-width="0"
                      fill="currentColor"
                    />
                    <path
                      d="M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z"
                      stroke-width="0"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="card z-0  bg-base-100 shadow-xl image-full h-[550px]">
            <figure>
              <Image src={img} alt="" objectFit="cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title mt-[230px] mb-2 text-white">
                Weight loss
              </h2>
              <p className="text-white">
                Weight loss contributes to improved health by reducing the risk
                of chronic conditions such as heart disease, diabetes, shedding
                excess weight can alleviate strain on joints, promoting better
                mobility and reducing discomfort.
              </p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => router.push("/product/listing/fitness")}
                  className="btn btn-info"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-player-track-next-filled"
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
                    <path
                      d="M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z"
                      stroke-width="0"
                      fill="currentColor"
                    />
                    <path
                      d="M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z"
                      stroke-width="0"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FitnessClass;
