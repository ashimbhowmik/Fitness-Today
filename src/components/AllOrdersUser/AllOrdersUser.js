"use client";

import { updateUsserOrderStatus } from "@/services/product";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

// Define your component
const AllOrdersUser = ({ data, users, products, address }) => {
  // State to toggle displaying discounted items
  const [showDiscounted, setShowDiscounted] = useState(false);

  const router = useRouter();

  const handleUpdateRole = async (userId, newOrder) => {
    const userOrders = {
      _id: userId,
      orders: newOrder,
    };

    const res = await updateUsserOrderStatus(userOrders);
    if (res.success) {
      alert("Status Updated");
      router.refresh();
    } else {
      alert("No Response");
    }
  };

  // Map through the data and display relevant information
  return (
    <div className="mt-[130px]">
      <div className="w-[90%] m-auto bg-white shadow-md rounded-lg">
        <table className="w-full">
          <thead className="">
            <tr className="text-center text-18px border-b">
              <th className="pl-10"></th>
              <th className="py-6">Name</th>
              <th className="w-20%">Product</th>
              <th className="w-20%">Discount</th>
              <th className="w-20%">Status</th>
              <th className="w-20%">Address</th>
              <th className="w-20%"></th>
              <th className="uppercase">Sale</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              const user = users?.find((user) => user._id === item.userID);
              if (user) {
                const matchingProduct = products?.find(
                  (product) => product._id === item.productID
                );
                if (matchingProduct) {
                  // Find the address based on the user ID
                  const userAddress = address?.find(
                    (addr) => addr.userID === user._id
                  );

                  if (!showDiscounted || matchingProduct.priceDrop > 0) {
                    return (
                      <tr key={item._id} className="text-center border-b">
                        <td className="py-6">{index + 1}</td>
                        <td className="py-6">{user.name}</td>
                        <td className="w-20%">{matchingProduct.name}</td>
                        <td className="w-20%">{matchingProduct.priceDrop}%</td>
                        <td className="w-20%">{item.orders}</td>
                        <td className="w-20%">
                          {userAddress ? userAddress.address : ""}
                        </td>
                        <td className="w-20%">
                          {!item || item.orders === "Pending" ? (
                            <div className="flex justify-center gap-4">
                              <button
                                onClick={() =>
                                  handleUpdateRole(item._id, "Delivered")
                                }
                                disabled={item.orders === "Delivered"}
                                className="w-115 bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 px-3 py-1 rounded-md text-white cursor-pointer"
                              >
                                Delivered
                              </button>
                            </div>
                          ) : null}

                          {!item || item.orders === "Delivered" ? (
                            <div className="flex justify-center gap-4">
                              <button
                                onClick={() =>
                                  handleUpdateRole(item._id, "Pending")
                                }
                                disabled={item.orders === "Pending"}
                                className="w-115 bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 px-3 py-1 rounded-md text-white cursor-pointer"
                              >
                                Pending
                              </button>
                            </div>
                          ) : null}
                        </td>
                        <td className="uppercase">{matchingProduct.onSale}</td>
                      </tr>
                    );
                  } else {
                    return null;
                  }
                } else {
                  return null;
                }
              } else {
                return null;
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Export the component
export default AllOrdersUser;
