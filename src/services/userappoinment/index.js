import Cookies from "js-cookie";

// post all product data from database
export const newAppoinmentUser = async (formData) => {
  try {
    const response = await fetch("/api/admin/add-appoinment", {
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

export const getAllAppoinment = async () => {
  try {
    const res = await fetch(
      "https://www.ownexercise.com/api/admin/all-appoinment",
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

export const deleteAppoinment = async (id) => {
  try {
    const res = await fetch(
      `https://www.ownexercise.com/api/admin/delete-appoinment?id=${id}`,
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
