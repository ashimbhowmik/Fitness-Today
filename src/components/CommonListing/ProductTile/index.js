"use client";

import { usePathname, useRouter } from "next/navigation";
import AdminButton from "../AdminButton";
import ProductButton from "../ProductButtons";

export default function ProductTile({ item }) {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <main>
      <section className="flex gap-8 border-b pb-6 mb-3">
        <div className="overflow-hideen rounded-xl  p-3 aspect-w-1 aspect-h-1 h-48 w-[20%]">
          <img
            src={item.imageUrl}
            alt="Product image"
            className="h-full w-full object-cover rounded-xl"
          />
        </div>
        <div className="flex w-[80%] py-8 justify-between ">
          <div className="flex flex-col justify-between">
            <h3 className="text-3xl font-normal">{item.name}</h3>
            <div className="flex gap-2 items-center">
              <p
                className={`font-semibold text-[18px] first-letter:${
                  item.onSale === "yes" ? "line-through" : ""
                }`}
              >
                {item.onSale === "yes" && item.price !== 0 ? (
                  <div className="flex items-center gap-2">
                    <p className="text-[18px] font-semibold text-gray-600">{`$ ${item.price}`}</p>
                    {item.priceDrop > 0 ? (
                      <div className="flex items-center gap-2">
                        <span>|</span>
                        <p className="text-[18px] font-semibold text-red-700">{`$ ${(
                          item.price -
                          item.price * (item.priceDrop / 100)
                        ).toFixed(2)}`}</p>
                      </div>
                    ) : null}
                  </div>
                ) : (
                  `$ ${item.price}`
                )}
              </p>
              {item.onSale === "yes" && item.priceDrop > 0 ? (
                <p className="text-[18px] font-semibold">{`-(${item.priceDrop}%) off`}</p>
              ) : null}
            </div>

            <div className="flex items-center gap-3">
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
              <p>|</p>
              {item.onSale === "yes" ? (
                <div className=" w-[250px]">
                  <p className="text-[#33be2c] text-[18px] font-semibold ">
                    In Stock
                  </p>
                </div>
              ) : (
                <div className=" w-[250px]">
                  <p className="text-red-600 text-[18px] font-semibold ">
                    Out of Stock
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-between items-end">
            <p className="text-end text-xl font-semibold">
              Discount : $ {item.priceDrop}
            </p>
            <div className="">
              <AdminButton item={item} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
