export const allRegisterUsers = async () => {
  try {
    const res = await fetch(
      "https://extra-project-defence-ashimbhowmik.vercel.app/api/allregisterusers",
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

import Cookies from "js-cookie";

export const updateUser = async (formData) => {
  try {
    const res = await fetch("/api/admin/updateUserRole", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`, // Use Cookies from js-cookie
      },
      cache: "no-store",
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateUserRoleChange = async (updatedUser) => {
  try {
    const res = await fetch(
      "https://extra-project-defence-ashimbhowmik.vercel.app/api/admin/updateUserRole",
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        cache: "no-store",
        body: JSON.stringify(updatedUser),
      }
    );

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};
export const deleteUsers = async (id) => {
  try {
    const res = await fetch(
      `https://extra-project-defence-ashimbhowmik.vercel.app/api/admin/delete-user?id=${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};
