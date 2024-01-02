"use client";

import { GlobalContext } from "@/context/GlobalContext";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import Cookies from "js-cookie";

const Layout = ({ children }) => {
  const {
    setIsAuthUser,
    setUser,

    setShowNavberForAdmin,
  } = useContext(GlobalContext);
  const [active, setActive] = useState("Dashboard");

  const pathName = usePathname();
  const router = useRouter();
  const isAdminView = pathName.includes("admin-view");
  function handleLogout() {
    setIsAuthUser(false);
    setUser(null);
    Cookies.remove("token");
    localStorage.clear();
    router.push("/");
  }
  function handleClientViewClick() {
    setShowNavberForAdmin(true);
    router.push("/");
  }
  return (
    <section className="h-full ">
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  lg:w-[85%] lg:ml-[240px] xl:ml-[220px] 2xl:ml-[255px]">
          {children}
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-[230px] min-h-full bg-[#07143c] text-gray-400 fixed">
            <div className="mt-[100px]">
              <div className="border-b pb-5 gap-5 lg:pb-5 lg:gap-3 md:pb-5 md:gap-3 2xl:pb-7 flex flex-col 2xl:gap-5">
                <li
                  className={
                    active === "Dashboard" ? "btn-fill" : "btn-no-fill"
                  }
                  onClick={() => {
                    // router.push("/admin-view/all-users");
                    setActive("Dashboard");
                  }}
                >
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current dark:text-gray-400"
                    >
                      <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                    </svg>
                    <span>Dashboard</span>
                  </a>
                </li>
                <li
                  className={
                    active === "Clint View" ? "btn-fill" : "btn-no-fill"
                  }
                  onClick={handleClientViewClick}
                >
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-user-hexagon"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                      <path d="M6.201 18.744a4 4 0 0 1 3.799 -2.744h4a4 4 0 0 1 3.798 2.741" />
                      <path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                    </svg>
                    <span>Clint View</span>
                  </a>
                </li>
                <li
                  className={
                    active === "Manage Appoinments" ? "btn-fill" : "btn-no-fill"
                  }
                  onClick={() => {
                    router.push("/admin-view/all-appoinment");
                    setActive("Manage Appoinments");
                  }}
                >
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-ambulance"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                      <path d="M6 10h4m-2 -2v4" />
                    </svg>
                    <button
                      onClick={() => router.push("/admin-view/all-appoinment")}
                    >
                      Appoinments
                    </button>
                  </a>
                </li>
                <li
                  className={active === "Order" ? "btn-fill" : "btn-no-fill"}
                  onClick={() => {
                    router.push("/admin-view/all-order");
                    setActive("Order");
                  }}
                >
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current dark:text-gray-400"
                    >
                      <path d="M203.247,386.414,208,381.185V355.4L130.125,191H93.875L16,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42A124.343,124.343,0,0,0,203.247,386.414ZM176,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,48,369.667V362.6l64-135.112L176,362.6Z"></path>
                      <path d="M418.125,191h-36.25L304,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42a124.343,124.343,0,0,0,91.369-40.607L496,381.185V355.4ZM464,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,336,369.667V362.6l64-135.112L464,362.6Z"></path>
                      <path d="M272,196.659A56.223,56.223,0,0,0,309.659,159H416V127H309.659a55.991,55.991,0,0,0-107.318,0H96v32H202.341A56.223,56.223,0,0,0,240,196.659V463H136v32H376V463H272ZM232,143a24,24,0,1,1,24,24A24,24,0,0,1,232,143Z"></path>
                    </svg>
                    <span>Orders</span>
                  </a>
                </li>

                <li
                  className={
                    active === "Users List" ? "btn-fill" : "btn-no-fill"
                  }
                  onClick={() => {
                    router.push("/admin-view/all-users");
                    setActive("Users List");
                  }}
                >
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
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
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      />
                    </svg>
                    <button>Users List</button>
                  </a>
                </li>
                <li
                  className={
                    active === "Doctors List" ? "btn-fill" : "btn-no-fill"
                  }
                  onClick={() => {
                    router.push("/admin-view/doctors-list");
                    setActive("Doctors List");
                  }}
                >
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-user-shield"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h2" />
                      <path d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5z" />
                      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    </svg>
                    <button>Doctors List</button>
                  </a>
                </li>
              </div>

              <div className="flex flex-col lg:pt-5 lg:gap-3 gap-5 pt-5 2xl:gap-5 2xl:pt-7">
                <li
                  className={
                    active === "Manage Products" ? "btn-fill" : "btn-no-fill"
                  }
                  onClick={() => {
                    router.push("/admin-view/all-products");
                    setActive("Manage Products");
                  }}
                >
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-shopping-cart"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M17 17h-11v-14h-2" />
                      <path d="M6 5l14 1l-1 7h-13" />
                    </svg>
                    <button
                      onClick={() => router.push("/admin-view/all-products")}
                    >
                      Manage Products
                    </button>
                  </a>
                </li>

                <li
                  className={
                    active === "Add Products" ? "btn-fill" : "btn-no-fill"
                  }
                  onClick={() => {
                    router.push("/admin-view/add-product");
                    setActive("Add Products");
                  }}
                >
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current dark:text-gray-400"
                    >
                      <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                      <rect width="32" height="64" x="256" y="232"></rect>
                    </svg>
                    <button>Add Products</button>
                  </a>
                </li>

                <li
                  className={
                    active === "Add Doctors" ? "btn-fill" : "btn-no-fill"
                  }
                  onClick={() => {
                    router.push("/admin-view/add-doctors");
                    setActive("Add Doctors");
                  }}
                >
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-user-plus"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                      <path d="M16 19h6" />
                      <path d="M19 16v6" />
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
                    </svg>
                    <button>Add Doctors</button>
                  </a>
                </li>
                <li
                  className={
                    active === "Add Exercise" ? "btn-fill" : "btn-no-fill"
                  }
                  onClick={() => {
                    router.push("/admin-view/add-exercise");
                    setActive("Add Exercise");
                  }}
                >
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-stretching"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M16 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      <path d="M5 20l5 -.5l1 -2" />
                      <path d="M18 20v-5h-5.5l2.5 -6.5l-5.5 1l1.5 2" />
                    </svg>
                    <button>Add Exercise</button>
                  </a>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Layout;
