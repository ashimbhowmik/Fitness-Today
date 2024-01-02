import Footer from "@/components/Footer/Footer";
import { GlobalContext } from "@/context/GlobalContext";
import { useContext } from "react";
import img from "../assests/img1.jpg"; // Fix the path to your image
import Image from "next/image";
import FitnessClass from "@/components/Home/FitnessClass/FitnessClass";
import FitnessMotive from "@/components/Home/FitnessMotive/FitnessMotive";
import DemoProduct from "@/components/Home/DemoProduct/DemoProduct";
import About from "@/components/Home/About/About";
import Pricing from "@/components/Home/Pricing";

export default function Home() {
  return (
    <main>
      <section className="relative mt-[99px]">
        <div className="relative h-[500px] md:h-[500px] lg:h-[500px] xl:h-[500px] 2xl:h-[700px]">
          <Image
            src={img}
            alt=""
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        <div className="absolute left-[15px] top-[150px] 2xl:left-[550px] 2xl:top-[230px] text-white">
          <div>
            <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-bold mb-7">
              Transform your life through fitness
            </h1>
            <p className="mb-3 text-xl md:text-3xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-bold text-center">
              Be Fit, Be Healthy
            </p>
          </div>
        </div>
        <div className="absolute 2xl:right-[70px] right-[30px] top-[350px] 2xl:top-[270px]">
          <div className="flex flex-col">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-facebook text-yellow-600 mb-3 ease-in-out duration-200 hover:text-white"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-instagram text-yellow-600 ease-in-out duration-200 mb-3 hover:text-white"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-linkedin text-yellow-600 ease-in-out duration-200 hover:text-white "
                width="35"
                height="35"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M8 11l0 5" />
                <path d="M8 8l0 .01" />
                <path d="M12 16l0 -5" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
              </svg>
            </button>
          </div>
        </div>
        <div className="absolute left-[160px] bottom-[190px] 2xl:left-[980px] 2xl:bottom-[260px]">
          <button className="px-5 py-2 hover:bg-orange-500 bg-yellow-500 font-semibold rounded-2xl ease-in-out duration-200">
            Get Started
          </button>
        </div>
      </section>
      <Pricing></Pricing>
      <FitnessMotive></FitnessMotive>
      <FitnessClass></FitnessClass>
      <DemoProduct></DemoProduct>
      <About></About>

      <Footer />
    </main>
  );
}
