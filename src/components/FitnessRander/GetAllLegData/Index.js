import React from "react";

const GetAllLegData = ({ item, index }) => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-10">
        {index}. {item.name}
      </h1>
      <div className="flex justify-center items-center mb-10">
        <img className="w-[500px] h-[500px]" src={item.imageUrl} alt="" />
      </div>
      <p className="text-xl mb-5">{item.bio}</p>
      <p className="text-[18px] ml-7 mb-3">1. {item.tips1}</p>
      <p className="text-[18px] ml-7 mb-3">2. {item.tips2}</p>
      <p className="text-[18px] ml-7 mb-3">3. {item.tips3}</p>
      <p className="text-[18px] ml-7 mb-3">4. {item.tips4}</p>
      <p className="text-[18px] ml-7 mb-3">5. Continue this 8 to 10 reps </p>
    </div>
  );
};

export default GetAllLegData;
