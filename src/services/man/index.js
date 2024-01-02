import Cookies from "js-cookie";

// export const getMansInformation = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/maninformation", {
//       method: "GET",
//       cache: "no-store",
//     });

//     const data = await res.json();

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const addNewArmsExercise = async (formData) => {
  try {
    const response = await fetch("/api/admin/add-arms", {
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
