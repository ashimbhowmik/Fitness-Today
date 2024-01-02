// In your ForgotPassword.js file
"use client";

import React, { useState } from "react";

import { toast } from "react-toastify";
import InputComponent from "@/components/FromElements/InputComponent/InputComponent";
import { resetPassword } from "@/services/res-pas";
import Notification from "@/components/Notification/Notification";
import { useRouter } from "next/navigation";

const Forgotpass = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleResetPassword = async () => {
    try {
      const response = await resetPassword(email, newPassword);

      if (response.success) {
        toast.success(response.message, {
          position: toast.POSITION.TOP_CENTER,
        });

        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        toast.error(response.message, { position: toast.POSITION.TOP_CENTER });
      }
    } catch (error) {
      console.error("Error during password reset:", error);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#ECF3FE]">
      <div className="flex flex-col gap-10 bg-white p-12 rounded-md shadow-md">
        <p className="text-xl font-bold">
          Enter your email and new password to reset your password
        </p>
        <InputComponent
          type="email"
          placeholder="Enter your email"
          label="Email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <InputComponent
          type="password"
          placeholder="Enter your new password"
          label="New Password"
          onChange={(event) => setNewPassword(event.target.value)}
          value={newPassword}
        />
        <div className="flex justify-center">
          <button
            className="btn btn-outline btn-info w-52"
            onClick={handleResetPassword}
          >
            Reset Password
          </button>
        </div>
      </div>
      <Notification></Notification>
    </div>
  );
};

export default Forgotpass;
