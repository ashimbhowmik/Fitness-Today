import Cookies from "js-cookie";

// for arms
export const addNewArm = async (formData) => {
  try {
    const response = await fetch("/api/admin/exercise/add-arms", {
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

export const getArmsExercise = async () => {
  try {
    const res = await fetch("/api/admin/exercise/all-arms", {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

// .................//......................//......................//....................
// for body

export const addBodyExercise = async (formData) => {
  try {
    const response = await fetch("/api/admin/exercise/add-body", {
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

export const getBodyExercise = async () => {
  try {
    const res = await fetch("/api/admin/exercise/all-body", {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

// .....................//.....................//.........................//..............
// for leg

export const addLegExercise = async (formData) => {
  try {
    const response = await fetch("/api/admin/exercise/add-leg", {
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

export const getLegExercise = async () => {
  try {
    const res = await fetch("/api/admin/exercise/all-leg", {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
