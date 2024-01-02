// In your services/auth.js file

export const resetPassword = async (email, newPassword) => {
  try {
    const response = await fetch("/api/reset-password", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, newPassword }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
