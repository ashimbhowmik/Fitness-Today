"use client";

import React, { useContext, useEffect, useState } from "react";
import img from "../../assests/main-login.jpeg";
import img1 from "../../assests/pp.png";
import Image from "next/image";
import styles from "./login.module.css";
import { loginFormControls } from "@/utils";
import InputComponent from "@/components/FromElements/InputComponent/InputComponent";
import { useRouter } from "next/navigation";
import { GlobalContext } from "@/context/GlobalContext";
import { login } from "@/services/login";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import Notification from "@/components/Notification/Notification";
import PageLoader from "@/components/Loader/PageLoader/PageLoader";

const initialFormdata = {
  email: "",
  password: "",
};

const Login = () => {
  const router = useRouter();

  const [formData, setFormData] = useState(initialFormdata);

  const {
    setIsAuthUser,
    user,
    setUser,
    componentLevelLoader,
    setComponentLevelLoader,
  } = useContext(GlobalContext);

  async function handleLogin() {
    setComponentLevelLoader({ loading: true, id: "" });
    const res = await login(formData);

    console.log(res);

    if (res.success) {
      toast.success(res.message, {
        position: toast.POSITION.TOP_CENTER,
      });

      // Assuming you have a 'role' property in the user data
      const userRole = res?.finalData?.user?.role;

      setIsAuthUser(true);
      setUser(res?.finalData?.user);
      setFormData(initialFormdata);
      Cookies.set("token", res?.finalData?.token);
      localStorage.setItem("user", JSON.stringify(res?.finalData?.user));

      setTimeout(() => {
        if (userRole === "customer") {
          router.push("/");
        } else if (userRole === "admin" || userRole === "developer") {
          router.push("/admin-view");
        }
      }, 2000);
      setComponentLevelLoader({ loading: false, id: "" });
    } else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      setComponentLevelLoader({ loading: false, id: "" });
      setIsAuthUser(false);
    }
  }

  return (
    <div className="bg-[#ECF3FE] flex flex-col 2xl:pb-[200px] xl:pt-0 pt-[60px] pb-[250px] xl:pb-[100px]">
      <div className="lg:flex lg:p-16 2xl:mt-[50px] xl:mt-[10px] flex-row-reverse">
        <div className="w-[50%] hidden lg:flex justify-center items-center pt-24">
          <Image
            src={img}
            alt=""
            fill={false}
            className="2xl:h-[650px] 2xl:w-[800px]"
          ></Image>
        </div>

        {/* from */}

        <div className="lg:w-[50%] w-[85%] m-auto lg:flex justify-center items-center ">
          {
            componentLevelLoader && componentLevelLoader.loading ? (
              <PageLoader
                color={"#323A70"}
                loading={componentLevelLoader && componentLevelLoader.loading}
              />
            ) : (
              <div className="flex px-7 pb-7 2xl:w-[50%] xl:w-[65%] flex-col items-center justify-start xl:px-10 xl:pb-6 2xl:pr-16 2xl:pb-12 2xl:pl-16 bg-white text-black shadow-md rounded-xl relative mt-[25px] lg:mt-[70px]">
                <div className="">
                  <Image
                    src={img1}
                    alt=""
                    fill={false}
                    className="2xl:h-[200px] 2xl:w-[200px] xl:h-[130px] xl:w-[130px] w-[140px] h-[140px]"
                  ></Image>
                </div>
                <p className="w-full lg:text-4xl text-3xl 2xl:mb-3 xl:mb-1 mb-1 font-medium text-center font-serif">
                  Welcome Back
                </p>
                <p className="w-full  2xl:mb-4 xl:mb-2 font-medium text-center font-serif">
                  Log in to Continue
                </p>
                <div className="w-full mt-6 mr-0 mb-0 ml-0 relative 2xl:space-y-8 xl:space-y-6 space-y-7">
                  {loginFormControls.map((controlItem) =>
                    controlItem.componentType === "input" ? (
                      <InputComponent
                        type={controlItem.type}
                        placeholder={controlItem.placeholder}
                        label={controlItem.label}
                        onChange={(event) => {
                          setFormData({
                            ...formData,
                            [controlItem.id]: event.target.value,
                          });
                        }}
                        value={formData[controlItem.id]}
                      />
                    ) : null
                  )}
                  <div className="flex justify-end ">
                    <button
                      onClick={() => router.push("/product/listing/forgotpass")}
                      type="button" // Add this line to prevent form submission
                      className="underline text-blue-600"
                    >
                      <i>Forget password ?</i>
                    </button>
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <button
                      className="btn btn-outline btn-info w-52"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </div>
                  <div className="flex gap-2 justify-center items-center text-blue-700">
                    <i>Create a New account ?</i>
                    <button
                      className="underline"
                      onClick={() => router.push("/register")}
                    >
                      <i>Click Here</i>
                    </button>
                  </div>
                </div>
              </div>
            )
            // null
          }
        </div>
      </div>
      <Notification></Notification>
    </div>
  );
};

export default Login;
