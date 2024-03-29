import Image from "next/image";
import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, icon, bgClass } = card;
  return (
    <div
      className={`card p-6 md:card-side ${bgClass} text-white shadow-xl mb-6 lg:mb-14`}
    >
      <figure>
        <Image src={icon} alt="" fill={false}></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
