import React from "react";
import clock from "../../../assests/clock.svg";
import marker from "../../../assests/marker.svg";
import phone from "../../../assests/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open 9.00am to 5.00pm everyday",
      icon: clock,
      bgClass: "bg-accent",
    },
    {
      id: 2,
      name: "Our Locations",
      description: "Open 9.00am to 5.00pm everyday",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact Us",
      description: "Open 9.00am to 5.00pm everyday",
      icon: phone,
      bgClass: "bg-accent",
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:gap-6  lg:mt-16 lg:px-0 px-5">
      {cardData.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
