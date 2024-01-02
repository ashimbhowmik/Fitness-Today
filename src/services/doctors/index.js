import Cookies from "js-cookie";

// post all product data from database
export const addNewDoctor = async (formData) => {
  try {
    const response = await fetch("/api/admin/add-doctors", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllDoctors = async () => {
  try {
    const res = await fetch(
      "https://new-defence-project-ashimbhowmik.vercel.app/api/admin/all-doctors",
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

export const searchDoctors = async () => {
  try {
    const res = await fetch(
      "https://new-defence-project-ashimbhowmik.vercel.app/api/admin/all-doctors",
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

export const deleteDoctor = async (id) => {
  try {
    const res = await fetch(
      `https://new-defence-project-ashimbhowmik.vercel.app/api/admin/delete-doctor?id=${id}`,
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

export const doctorById = async (id) => {
  try {
    const res = await fetch(
      `https://new-defence-project-ashimbhowmik.vercel.app/api/admin/doctor-by-id?id=${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const doctorListed = async (updatedUser) => {
  try {
    const res = await fetch(
      "https://new-defence-project-ashimbhowmik.vercel.app/api/admin/update-doctor",
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
