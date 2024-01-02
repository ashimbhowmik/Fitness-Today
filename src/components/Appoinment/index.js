"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Notification from "../Notification/Notification";

import DoctorsCard from "./DoctorsCard";
import { searchDoctors } from "@/services/doctors";

export default function Appoinment({ data }) {
  console.log(data, "doctors data");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [noResultsFound, setNoResultsFound] = useState(false);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    const response = await searchDoctors();
    if (response.success) {
      setSearchResults(response.data);
    }
  };

  const handleSearch = async () => {
    const response = await searchDoctors();

    if (response.success) {
      const products = response.data;

      if (searchQuery === "") {
        setSearchResults(products);
        setNoResultsFound(false);
      } else {
        const filteredProducts = products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setSearchResults(filteredProducts);
        setNoResultsFound(filteredProducts.length === 0);
      }
    }
  };

  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);

  // This useEffect monitors changes in the searchQuery state
  useEffect(() => {
    if (searchQuery === "") {
      fetchAllProducts(); // Fetch all products when searchQuery is empty
    }
  }, [searchQuery]);

  const handleRefresh = () => {
    fetchAllProducts(); // Fetch all products and refresh the list
  };

  // Event handler for the input field's value change
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Event handler to trigger the search when Enter key is pressed
  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Event handler to clear the input field
  const handleClearInput = () => {
    setSearchQuery("");
  };

  return (
    <section className=" mt-28 h-full">
      <section className="w-[85%] px-7 m-auto py-10 flex-row-reverse mb-10 mt-5 rounded-lg shadow-sm flex justify-between bg-[#f6f3fc]">
        <div className="flex rounded-lg">
          <fieldset className="w-full space-y-1  dark:text-gray-100">
            <div className="relative flex items-center rounded-lg ">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="button"
                  title="search"
                  className="p-1 focus:outline-none focus:ring"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 text-black"
                  >
                    {/* ... Your search icon SVG code here */}
                  </svg>
                </button>
              </span>
              <input
                value={searchQuery}
                onChange={handleInputChange}
                onKeyPress={handleInputKeyPress}
                placeholder="Search..."
                className="py-[10px] pl-10 pr-12 text-sm rounded-lg !rounded-e-none sm:w-auto focus:outline-none bg-white text-black focus:dark:border-sky-400"
              />
              {searchQuery && (
                <button
                  className="absolute inset-y-0 right-[50px] p-1 pr-2"
                  onClick={handleClearInput}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
              <button
                className="bg-blue-400 py-[8px] px-3 rounded-lg !rounded-s-none"
                onClick={handleSearch}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </div>
          </fieldset>
        </div>
      </section>

      <div className="m-auto pt-6 pb-12 bg-white shadow-lg w-[85%] px-4 sm:px-6 lg:px-8">
        <div className="mt-10 lg:grid  sm:gap-4 lg:mt-16 border-t pt-6">
          {searchResults.length ? (
            searchResults.map((item) => (
              <DoctorsCard
                key={item._id}
                item={item}
                handleRefresh={fetchAllProducts}
              />
            ))
          ) : noResultsFound ? (
            <section className="flex items-center sm:p-1">
              <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-40 h-40 dark:text-gray-600"
                >
                  <path
                    fill="currentColor"
                    d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
                  ></path>
                  <rect
                    width="176"
                    height="32"
                    x="168"
                    y="320"
                    fill="currentColor"
                  ></rect>
                  <polygon
                    fill="currentColor"
                    points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
                  ></polygon>
                  <polygon
                    fill="currentColor"
                    points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
                  ></polygon>
                </svg>
                <p className="text-3xl">
                  Looks like our services are currently offline
                </p>
                <button
                  onClick={handleRefresh}
                  rel="noopener noreferrer"
                  href="#"
                  className="px-8 py-3 font-semibold rounded dark-bg-sky-400 dark:text-gray-900"
                >
                  Refresh This Page
                </button>
              </div>
            </section>
          ) : null}
        </div>
      </div>
      <Notification></Notification>
    </section>
  );
}
