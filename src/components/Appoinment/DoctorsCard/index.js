"use client";

import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function DoctorsCard({ item }) {
  const router = useRouter();

  return (
    <main>
      <div className="shadow-xl p-5 rounded-xl bg-[#FFFFFF] space-y-8 lg:w-[380px]">
        <figure>
          <img
            src={item.imageUrl}
            alt="Dcotor image"
            className="h-[360px] w-[420px]"
          />
        </figure>
        <div className="space-y-5">
          <div className=" flex justify-between items-center text-xl font-bold">
            <h1>{item.name}</h1>
            <h1 className="badge badge-secondary">{item.role}</h1>
          </div>
          <p className="h-[50px] overflow-hidden text-justify mb-4">
            {item.bio}
          </p>
          <div className="flex justify-between gap-3 items-center">
            <div className="badge badge-outline">{item.specialization}</div>
            <button
              onClick={() => router.push(`/doctors-route/${item._id}`)}
              className=" px-3 py-1 shadow-md hover:shadow-none font-semibold bg-slate-100 rounded-full"
            >
              Get Appoinment
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
