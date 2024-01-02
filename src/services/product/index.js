// add a new product service

import Cookies from "js-cookie";

// post all product data from database
export const addNewProduct = async (formData) => {
  try {
    const response = await fetch("/api/admin/add-product", {
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

// GET all product from database

export const getAllAdminProducts = async () => {
  try {
    const res = await fetch(
      "https://new-defence-project-ashimbhowmik.vercel.app/api/admin/all-products",
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

export const searchProducts = async () => {
  try {
    const res = await fetch("/api/admin/all-products", {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

// updata product data from database
export const updateAProduct = async (formData) => {
  try {
    const res = await fetch("/api/admin/update-product", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
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

// delete product data from database
export const deleteAProduct = async (id) => {
  try {
    const res = await fetch(`/api/admin/delete-product?id=${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const productById = async (id) => {
  try {
    const res = await fetch(
      `https://new-defence-project-ashimbhowmik.vercel.app/api/admin/product-by-id?id=${id}`,
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

export const updateUsserOrderStatus = async (userOrders) => {
  try {
    const res = await fetch(
      "https://new-defence-project-ashimbhowmik.vercel.app/api/admin/update-order",
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        cache: "no-store",
        body: JSON.stringify(userOrders),
      }
    );

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};
