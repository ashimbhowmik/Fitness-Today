"use client";

import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function DoctorsCard({ item }) {
  const router = useRouter();

  console.log(item);
  return (
    <main>
      <div className="card  shadow-xl">
        <figure>
          <img
            src={item.imageUrl}
            alt="Dcotor image"
            className="h-[400px] w-[420px]"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.role}</div>
          </h2>
          <p className="h-[45px] overflow-hidden w-[356px] mb-4">{item.bio}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{item.specialization}</div>
            <button
              onClick={() => router.push(`/doctors-route/${item._id}`)}
              className="badge badge-outline"
            >
              Get Appoinment
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
