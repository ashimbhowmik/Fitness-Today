import React from "react";
import chair from "../../../assests/chair.png";
import Image from "next/image";
const Banner = () => {
  return (
    <div>
      <div className="hero lg:my-14 ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <Image
            src={chair}
            alt=""
            fill={false}
            className="w-[500px] h-[300px]"
          ></Image>
          <div>
            <h1 className="lg:text-5xl text-3xl text-center lg:text-left mt-5 lg:mt-0 font-bold">
              Explore Our Doctors!
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
