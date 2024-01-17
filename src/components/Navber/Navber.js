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
    // showNavberForAdmin,
    // setShowNavberForAdmin,
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
                  className=" bg-white text-black mt-1.5 inline-block border-2 hover:bg-black px-3 py-3 text-xs rounded-lg font-medium upprcase tracking-wide hover:text-white ease-in duration-200"
                >
                  Login
                </button>
                <button
                  onClick={() => router.push("/register")}
                  className=" bg-white text-black mt-1.5 inline-block border-2 hover:bg-black px-3 py-3 text-xs rounded-lg font-medium upprcase tracking-wide hover:text-white ease-in duration-200"
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
                      className="hidden lg:block bg-white text-black mt-1.5 border-2 hover:bg-black px-3 py-3 text-xs rounded-lg font-medium upprcase tracking-wide hover:text-white ease-in duration-200"
                    >
                      Account
                    </button>
                    <button
                      onClick={() => setShowCartModal(true)}
                      className="lg:bg-white text-black lg:mt-1.5 mt-1 inline-block lg:border-2 border-0 hover:bg-black px-1 lg:px-3 py-3 text-xs rounded-lg font-medium tracking-wide hover:text-white ease-in duration-200"
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
                  className="lg:bg-white text-black lg:mt-1.5 mt-1 inline-block lg:border-2 border-0 hover:bg-black px-1 lg:px-3 py-3 text-xs rounded-lg font-medium tracking-wide hover:text-white ease-in duration-200"
                >
                  Logout
                </button>
              </>
            )}

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 mt-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 "
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
