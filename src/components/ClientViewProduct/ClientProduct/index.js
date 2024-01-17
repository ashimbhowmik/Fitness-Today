"use client";

import { useRouter } from "next/navigation";
import ClientButton from "../ClientButton";

export default function ClientProduct({ item }) {
  const router = useRouter();
  return (
    <div className="h-[500px] rounded-lg bg-[#fcfcff] hover:shadow-none cursor-pointer shadow-lg relative ease-in duration-300 mb-[60px] ">
      <div className="overflow-hideen aspect-w-1 h-[300px] aspect-h-1 rounded-md p-3">
        <img
          src={item.imageUrl}
          alt="Product image"
          className="h-full w-full object-cover transition-all duration-300 rounded-lg "
        />
      </div>

      <div className="px-4 relative flex flex-col gap-4 mt-3">
        <h1 className="font-bold uppercase text-[20px] mt-3">{item.name}</h1>
        <div className="flex !justify-between">
          <div
            className={`font-semibold flex w-full first-letter:${
              item.onSale === "yes" ? "line-through" : ""
            }`}
          >
            {item.onSale === "yes" && item.price !== 0 ? (
              <div className="flex justify-between items-center w-full ">
                <p className=" font-semibold text-[16px]">{`BDT : ${item.price}`}</p>
                {item.priceDrop > 0 ? (
                  <div className="items-center gap-2">
                    <p className=" font-semibold text-[16px] text-red-700 text-end">{`BDT : ${(
                      item.price -
                      item.price * (item.priceDrop / 100)
                    ).toFixed(2)}`}</p>
                  </div>
                ) : null}
              </div>
            ) : (
              <>
                <p className="text-[16px]">BDT : {item.price}</p>
              </>
            )}
          </div>
          {item.onSale === "yes" && item.priceDrop > 0 ? (
            <>
              <div className="flex shadow-lg justify-center items-center flex-col absolute top-[-350px] right-[-30px] w-[70px] h-[70px] bg-black text-white p-3 rounded-full">
                <p className=" text-sm font-semibold">{`${item.priceDrop}%`}</p>
                <p>off</p>
              </div>
            </>
          ) : null}
        </div>

        <div className="flex w-full flex-row-reverse justify-between">
          <div>
            {item.onSale === "yes" ? (
              <div className="rounded-full">
                <p className="text-[#33be2c] font-semibold">In Stock</p>
              </div>
            ) : (
              <div className="rounded-full">
                <p className="text-red-600 font-semibold">Out of Stock</p>
              </div>
            )}
          </div>

          <button
            onClick={() => router.push(`/product/${item._id}`)}
            className="flex items-center gap-3 font-medium text-slate-500 text-[18px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
            Details
          </button>
        </div>
      </div>
      <div className="absolute bottom-[-18px] 2xl:left-[123px] lg:left-[95px] left-[30%]">
        <ClientButton item={item} />
      </div>
    </div>
  );
}
