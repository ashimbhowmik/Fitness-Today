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
import Forgot from "@/app/product/listing/forgotpass/page";

const initialFormdata = {
  email: "",
  password: "",
};

const Login = () => {
  const router = useRouter();

  const [formData, setFormData] = useState(initialFormdata);
  console.log(formData);
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
      }, 1000);
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
    <div className="bg-[#ECF3FE] flex flex-col pb-[200px]">
      <div className="lg:flex lg:p-16 lg:mt-16 mt-[250px] flex-row-reverse">
        <div className="flex-1 hidden lg:flex justify-center items-center pt-24">
          <Image src={img} alt="" fill={false} className={styles.imgae}></Image>
        </div>

        {/* from */}

        <div className="flex-1 flex justify-center items-center ">
          {componentLevelLoader && componentLevelLoader.loading ? (
            <PageLoader
              color={"#323A70"}
              loading={componentLevelLoader && componentLevelLoader.loading}
            />
          ) : (
            <div className="flex lg:w-[50%] flex-col items-center justify-start pr-16 pb-12 pl-16 bg-white text-black shadow-md rounded-xl relative  mt-[70px]">
              <div className="">
                <Image
                  src={img1}
                  alt=""
                  fill={false}
                  className={styles.imgae1}
                ></Image>
              </div>
              <p className="w-full text-4xl mb-3 font-medium text-center font-serif">
                Welcome Back
              </p>
              <p className="w-full  mb-4 font-medium text-center font-serif">
                Log in to Continue
              </p>
              <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
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
          )}
        </div>
      </div>
      <Notification></Notification>
    </div>
  );
};

export default Login;
