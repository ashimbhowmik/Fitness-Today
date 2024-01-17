import Image from "next/image";
import React from "react";
import img1 from "../../../assests/Equp.jpg";
import img2 from "../../../assests/dImage.jpg";

const DemoProduct = () => {
  return (
    <div className="2xl:py-[100px]  py-[50px] bg-black">
      <main className="2xl:w-[75%] xl:w-[90%] m-auto w-[90%] lg:px-0">
        <section className="2xl:flex xl:flex xl:gap-20 2xl:gap-0">
          <div className="2xl:w-[50%] xl:w-[50%]  flex flex-col justify-center">
            <div className=" ">
              <h1 className="lg:text-5xl text-4xl text-center lg:text-left text-[#0E86A6] font-bold mb-2">
                Ready To Buy Our Best
              </h1>
              <h1 className="text-3xl text-center lg:text-left lg:text-[44px] text-[#0E86A6] font-bold">
                Product
              </h1>
            </div>
            <div className="h-[3px] 2xl:w-[30%] xl:w-[40%]  bg-[#0E86A6] my-5"></div>
            <p className="2xl:w-[60%] xl:w-[70%] text-slate-400">
              We provide all kind of exercise equipment. You can buy this
              equipment any time. Our Product quality is fresh and good. If you
              don't like our product, you can change this.
            </p>
          </div>
          <div className="2xl:w-[50%] xl:w-[50%] relative">
            <Image
              src={img1}
              alt=""
              objectFit="cover"
              className="rounded-xl 2xl:ml-[113px] 2xl:h-[500px] 2xl:w-[600px] xl:h-[450px]  mt-8 lg:mt-0"
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
        </section>
        {/* Doctors Appoinment */}
        <section className="2xl:flex xl:flex xl:gap-20 2xl:gap-0 flex-row-reverse mt-32">
          <div className="2xl:w-[50%] xl:w-[50%]  2xl:ml-[210px] flex flex-col justify-center">
            <div className=" ">
              <h1 className="lg:text-5xl text-center lg:text-left text-3xl text-[#0E86A6] font-bold mb-2">
                Ready To Appoinment Our
              </h1>
              <h1 className="lg:text-[44px] text-3xl text-center lg:text-left text-[#0E86A6] font-bold">
                Best Doctor's
              </h1>
            </div>
            <div className="h-[3px] 2xl:w-[30%] my-7 xl:w-[40%]   bg-[#0E86A6] lg:my-5"></div>
            <p className="2xl:w-[60%] mt-1 lg:mt-0 text-slate-400">
              We provide all kind of exercise equipment. You can buy this
              equipment any time. Our Product quality is fresh and good. If you
              don't like our product, you can change this.
            </p>
          </div>
          <div className="2xl:w-[50%] xl:w-[50%]  relative">
            <Image
              src={img2}
              alt=""
              objectFit="cover"
              className="rounded-xl h-[500px] 2xl:w-[600px] xl:w-[600px] mt-8 lg:mt-0"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DemoProduct;
