import React from "react";
import chair from "../../../assests/chair.png";
import Image from "next/image";
const Banner = () => {
  return (
    <div>
      <div className=" lg:my-14">
        <div className=" lg:flex lg:flex-row-reverse lg:w-full w-[89%] m-auto">
          <div className="lg:w-[40%]">
            <Image
              src={chair}
              alt=""
              fill={false}
              className="w-full lg:h-[400px] h-[300px]"
            ></Image>
          </div>
          <div className="lg:w-[60%] flex flex-col justify-center">
            <h1 className="lg:text-6xl text-3xl text-center lg:text-left mt-5 lg:mt-0 font-bold">
              Explore Our Doctors!
            </h1>
            <p className="py-6 lg:w-[80%] lg:text-xl text-justify lg:text-left">
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
