"use client";
import React from "react";
import DoctorsCard from "../DoctorsCard";
import Banner from "@/components/AppoinmentHome/Bannar/Bannar";
import InfoCards from "@/components/AppoinmentHome/InfoCards/InfoCards";
import Footer from "@/components/Footer/Footer";

export default function DoctorsClient({ data }) {
  return (
    <main>
      <section className="mt-36 h-full lg:w-[80%] m-auto ">
        <section>
          <Banner></Banner>
          <InfoCards></InfoCards>
          <h1 className="text-center text-[30px] font-bold mb-14">
            Meet Our Doctors!
          </h1>
          <div className="grid gap-6 lg:px-0 lg:gap-36 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 grid-cols-1  px-5 mb-20">
            {data &&
              data?.map((item) => (
                <div key={item._id} className="mb-4">
                  <DoctorsCard item={item} />
                </div>
              ))}
          </div>
        </section>
      </section>
      <Footer></Footer>
    </main>
  );
}
