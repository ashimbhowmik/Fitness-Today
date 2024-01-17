"use client";
import { adminNavOptions, navOptions, styles } from "@/utils";
import DarkMode from "../DarkMode/DarkMode";
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { GlobalContext } from "@/context/GlobalContext";
import CommonModal from "../CommonModal/CommonModal";
import { usePathname, useRouter } from "next/navigation";

import Cookies from "js-cookie";
import CartModal from "../CartModal";

// variable creatae

function NavItems({ isModalView = false, isAdminView, router }) {
  const [active, setActive] = useState("Dashboard");

  return (
    <div
      className={`items-center justify-between w-full md:flex md:w-auto ${
        isModalView ? "" : "hidden"
      }`}
      id="nav-items"
    >
      <ul
        className={`flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  ${
          isModalView ? "border-none" : "border border-gray-100"
        }`}
      >
        {isAdminView
          ? null
          : navOptions.map((item) => (
              <li
                className="cursor-pointer block py-2 pl-3 pr-4  rounded md:p-0"
                key={item.id}
                onClick={() => router.push(item.path)}
              >
                {item.label}
              </li>
            ))}
      </ul>
    </div>
  );
}

const Navber = () => {
  const { showNavModal, setShowNavModal } = useContext(GlobalContext);
  const {
    user,
    isAuthUser,
    setIsAuthUser,
    setUser,
    currentUpdatedProduct,
    setCurrentUpdatedProduct,
    showCartModal,
    setShowCartModal,
  } = useContext(GlobalContext);

  const pathName = usePathname();
  const router = useRouter();

  // console.log(currentUpdatedProduct, "navbar");

  useEffect(() => {
    if (
      pathName !== "/admin-view/add-product" &&
      currentUpdatedProduct !== null
    )
      setCurrentUpdatedProduct(null);
  }, [pathName]);

  function handleLogout() {
    setIsAuthUser(false);
    setUser(null);
    Cookies.remove("token");
    localStorage.clear();
    router.push("/");
  }

  const isAdminView = pathName.includes("admin-view");

  return (
    <>
      <nav className=" fixed w-full z-20 top-0 left-0 shadow  bg-slate-50 text-black lg:py-2">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-3 lg:p-4">
          <div
            onClick={() => router.push("/")}
            className="flex items-cemter cursor-pointer"
          >
            <span className="slef-center text-2xl font-semibold whitespace-nowrap">
              Fitness
            </span>
          </div>

          <div className="flex md:order-2 gap-1">
            {!isAuthUser ? null : (
              <>
                {user?.role === "admin" || user?.role === "developer" ? (
                  isAdminView ? null : (
                    <>
                      <button
                        onClick={() => router.push("/admin-view")}
                        className="lg:bg-white  text-black lg:mt-1.5 mt-1 inline-block lg:border-2 border-0 hover:bg-black px-1 lg:px-3 py-3 text-xs rounded-lg font-medium tracking-wide hover:text-white ease-in duration-200"
                      >
                        Admin View
                      </button>
                    </>
                  )
                ) : null}
              </>
            )}
            {!isAuthUser ? (
              <>
                <button
                  onClick={() => router.push("/login")}
                  className=" bg-white hidden text-black mt-1.5 lg:block border-2 hover:bg-black px-3 py-3 text-xs rounded-lg font-medium upprcase tracking-wide hover:text-white ease-in duration-200"
                >
                  Login
                </button>
                <button
                  onClick={() => router.push("/register")}
                  className=" bg-white hidden text-black mt-1.5 lg:block border-2 hover:bg-black px-3 py-3 text-xs rounded-lg font-medium upprcase tracking-wide hover:text-white ease-in duration-200"
                >
                  Register
                </button>
              </>
            ) : (
              <>
                {!isAdminView && isAuthUser ? (
                  <Fragment>
                    <button
                      onClick={() => router.push("/account")}
                      className=" lg:block bg-white text-black mt-1.5 border-2 hover:bg-black px-3 py-3 text-xs rounded-lg font-medium upprcase tracking-wide hover:text-white ease-in duration-200"
                    >
                      Account
                    </button>
                    <button
                      onClick={() => setShowCartModal(true)}
                      className="lg:block bg-white text-black mt-1.5 border-2 hover:bg-black px-3 py-3 text-xs rounded-lg font-medium upprcase tracking-wide hover:text-white ease-in duration-200"
                    >
                      Cart
                    </button>
                  </Fragment>
                ) : (
                  <label
                    htmlFor="my-drawer-2"
                    className="lg:bg-white  text-black mt-1.5  inline-block lg:border-2 border-0 hover:bg-black px-1 lg:px-3 py-3 text-xs rounded-lg font-medium tracking-wide hover:text-white ease-in duration-200 lg:hidden"
                  >
                    Open drawer
                  </label>
                )}
                <button
                  onClick={handleLogout}
                  className="lg:bg-white hidden text-black lg:mt-1.5 mt-1 lg:block lg:border-2 border-0 hover:bg-black px-1 lg:px-3 py-3 text-xs rounded-lg font-medium tracking-wide hover:text-white ease-in duration-200"
                >
                  Logout
                </button>
              </>
            )}

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="hidden items-center p-2 mt-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 "
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => setShowNavModal(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* Navber items start*/}

          <NavItems router={router} isAdminView={isAdminView}></NavItems>

          {/* Navber items end */}
        </div>
      </nav>

      {/* new navber */}

      <div class="fixed lg:hidden bottom-0 z-50 w-full -translate-x-1/2 bg-white border-t border-gray-200 left-1/2 dark:bg-gray-700 dark:border-gray-600">
        <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
          {!isAuthUser ? (
            <>
              <button
                onClick={() => router.push("/product/listing/fitness")}
                data-tooltip-target="tooltip-home"
                type="button"
                class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
              >
                <svg
                  class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 icon icon-tabler icon-tabler-run"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M4 17l5 1l.75 -1.5" />
                  <path d="M15 21l0 -4l-4 -3l1 -6" />
                  <path d="M7 12l0 -3l5 -1l3 3l3 1" />
                </svg>
              </button>
              <button
                onClick={() => router.push("/product/listing/all-products")}
                data-tooltip-target="tooltip-bookmark"
                type="button"
                class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-building-store w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21l18 0" />
                  <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                  <path d="M5 21l0 -10.15" />
                  <path d="M19 21l0 -10.15" />
                  <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
                </svg>
              </button>
              <button
                onClick={() => router.push("/product/listing/appoinments")}
                data-tooltip-target="tooltip-search"
                type="button"
                class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-ambulance w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
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
              </button>
              <button
                onClick={() => router.push("/login")}
                data-tooltip-target="tooltip-search"
                type="button"
                class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-login icon icon-tabler icon-tabler-ambulance w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                  <path d="M21 12h-13l3 -3" />
                  <path d="M11 15l-3 -3" />
                </svg>
              </button>
              <button
                onClick={() => router.push("/register")}
                data-tooltip-target="tooltip-search"
                type="button"
                class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-user-square icon icon-tabler icon-tabler-ambulance w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 10a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path d="M6 21v-1a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v1" />
                  <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
                </svg>
              </button>
            </>
          ) : (
            <>
              {!isAdminView && isAuthUser ? (
                <Fragment>
                  {/* Fitness */}
                  <button
                    onClick={() => router.push("/product/listing/fitness")}
                    data-tooltip-target="tooltip-home"
                    type="button"
                    class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                  >
                    <svg
                      class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 icon icon-tabler icon-tabler-run"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      <path d="M4 17l5 1l.75 -1.5" />
                      <path d="M15 21l0 -4l-4 -3l1 -6" />
                      <path d="M7 12l0 -3l5 -1l3 3l3 1" />
                    </svg>
                  </button>

                  {/* Product */}
                  <button
                    onClick={() => router.push("/product/listing/all-products")}
                    data-tooltip-target="tooltip-bookmark"
                    type="button"
                    class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-building-store w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 21l18 0" />
                      <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                      <path d="M5 21l0 -10.15" />
                      <path d="M19 21l0 -10.15" />
                      <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
                    </svg>
                  </button>

                  {/* Home */}
                  <button
                    onClick={() => router.push("/")}
                    data-tooltip-target="tooltip-post"
                    type="button"
                    className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                    title="Home"
                  >
                    <svg
                      className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                  </button>

                  {/* Appointment */}
                  <button
                    onClick={() => router.push("/product/listing/appoinments")}
                    data-tooltip-target="tooltip-search"
                    type="button"
                    class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-ambulance w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
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
                  </button>
                </Fragment>
              ) : null}
              {/* Logout */}
              <button
                onClick={handleLogout}
                data-tooltip-target="tooltip-search"
                type="button"
                class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-logout w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                  <path d="M9 12h12l-3 -3" />
                  <path d="M18 15l3 -3" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
      {/* new End */}
      <CommonModal
        showModalTitle={false}
        mainContent={
          <NavItems
            router={router}
            isModalView={true}
            isAdminView={isAdminView}
          />
        }
        show={showNavModal}
        setShow={setShowNavModal}
      />
      {showCartModal && <CartModal />}
    </>
  );
};

export default Navber;
