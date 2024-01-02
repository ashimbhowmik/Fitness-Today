import Image from "next/image";
import React from "react";
import bg from "../../../assests/bg.jpg";

const AppoinmentBanner = ({ item }) => {
  return (
    <div className="mt-[120px] lg:mt-0">
      <div className="hero lg:h-[550px]">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <Image
              src={bg}
              alt=""
              fill={false}
              className="rounded-lg h-[350px] hidden lg:block w-[350px] shadow-2xl"
            ></Image>
            <img
              src={item.imageUrl}
              alt="Dcotor image"
              className="rounded-lg lg:absolute h-[370px] w-[380px]  lg:right-[150px] lg:top-[80px] shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 lg:mt-12 mt-5 px-4">
            <h1 className="text-5xl text-center lg:text-left mb-2 font-bold">
              {item.name}
            </h1>
            <p className="pt-6 pb-5  text-justify">{item.bio}</p>
            <p className="capitalize font-bold text-xl">
              Specialization : {item.specialization}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
