"use client";

import React, { useContext, useEffect, useState } from "react";
import img from "../../assests/main-login.jpeg";
import Image from "next/image";
import styles from "./ragister.module.css";
import img1 from "../../assests/pp.png";
import { registrationFormControls } from "@/utils";
import InputComponent from "@/components/FromElements/InputComponent/InputComponent";
import SelectComponent from "@/components/FromElements/SelectComponent/SelectComponent";
import { useRouter } from "next/navigation";
import { GlobalContext } from "@/context/GlobalContext";
import { registerNewUser } from "@/services/register";
import { toast } from "react-toastify";
import Notification from "@/components/Notification/Notification";
import ComponentLevelLoader from "@/components/Loader/ComponentLevelLoader/ComponentLevelLoader";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  age: "",
  role: "customer",
  appoinment: "",
};

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormData);
  const [isRegistered, setIsRegistered] = useState(false);
  const {
    pageLevelLoader,
    setPageLevelLoader,
    isAuthUser,
    updatedData,
    updateData,
  } = useContext(GlobalContext);

  function isFormValid() {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.password.trim() !== "" &&
      formData.age.trim() !== ""
    );
  }

  async function handleRegisterOnSubmit() {
    setPageLevelLoader(true);

    try {
      const response = await registerNewUser(formData);

      if (response?.success) {
        toast.success(response.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        setIsRegistered(true);
        setPageLevelLoader(false);
        setFormData(initialFormData);

        // Update the updatedData in the context
        if (updatedData) {
          const updatedUserData = [...updatedData];
          updatedUserData.push(response.user);
          updateData(updatedUserData);
        }

        // Redirect to login page

        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
      if (!response?.success) {
        toast.error(response.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        setPageLevelLoader(false);
        setFormData(initialFormData);
      }
    } catch (error) {
      console.error("Error during registration:", error);

      // Check for SyntaxError: Unexpected end of JSON input
      if (
        error instanceof SyntaxError &&
        error.message === "Unexpected end of JSON input"
      ) {
        // Show an alert for this specific error
        toast.error("Registration failed. Please try again later.", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        // Show a generic error toast for other errors
        toast.error("Registration failed. Please try again later.", {
          position: toast.POSITION.TOP_CENTER,
        });
      }

      setPageLevelLoader(false);
      setFormData(initialFormData);
    }
  }

  useEffect(() => {
    if (isAuthUser) router.push("/");
  }, [isAuthUser]);

  return (
    <div className="bg-[#EDF4FF] 2xl:pt-32 xl:pt-24 flex flex-col pb-[200px]">
      <div className="lg:flex px-6 lg:px-16 mt-14 lg:mt-0 pb-8">
        <div className="flex-1 hidden lg:flex justify-center items-center ">
          <Image src={img} alt="" fill={false} className={styles.imgae}></Image>
        </div>

        {/* from */}
        <div className="flex-1 flex justify-center items-center">
          <div className="flex 2xl:w-[55%] xl:w-[70%] flex-col items-center justify-start px-7 2xl:pr-16  lg:pb-10 pb-5 xl:px-14 2xl:pl-16 bg-white text-black shadow-md rounded-xl relative mt-[25px] lg:mt-[40px]">
            <Image
              src={img1}
              alt=""
              fill={false}
              className="2xl:h-[200px] 2xl:w-[200px] h-[120px] w-[120px]"
            ></Image>

            <p className="w-full text-3xl lg:text-4xl mb-6 font-medium text-center font-serif">
              {isRegistered ? "Registration Successfull !" : "Registration"}
            </p>

            <div className="w-full 2xl:mt-6 mt-2  mr-0 mb-0 ml-0 relative 2xl:space-y-8 space-y-6">
              {registrationFormControls.map((controlItem) =>
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

              <div className="w-full flex justify-center items-center">
                {isFormValid() ? (
                  <>
                    <button
                      className=" disabled:opacity-100 btn btn-outline btn-info w-52 uppercase"
                      disabled={!isFormValid()}
                      onClick={() => {
                        handleRegisterOnSubmit();
                      }}
                    >
                      {pageLevelLoader ? <p>Registering</p> : "Register"}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="disabled:opacity-50 inline-flex items-center justify-center border-[1px] rounded-[8px] px-6 py-3 bg-slate-200 border-sky-400 w-52 focus:shadow font-semibold uppercase text-sm text-sky-500"
                      disabled={!isFormValid()}
                    >
                      Register
                    </button>
                  </>
                )}
              </div>
              <div className="lg:flex gap-2 text-center lg:text-left justify-center items-center text-blue-700">
                <i>All Ready you have a account ?</i>
                <button
                  className="underline"
                  onClick={() => router.push("/login")}
                >
                  <i>Login Here</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Notification></Notification>
    </div>
  );
};

export default Register;
