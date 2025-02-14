import apiClient from "./index"; // Import the Axios instance
import Cookies from "js-cookie";

// Login API
export const login = async (payload: any) => {
  try {
    const response = await apiClient.post("/api/auth/login/", payload);

    if (response.data.status === "success" && response.data.jwt) {
      const { access, refresh, user } = response.data.jwt;

      // Store tokens in cookies
      Cookies.set("access_token", access, { expires: 1 }); // Expires in 1 day
      Cookies.set("refresh_token", refresh, { expires: 7 }); // Expires in 7 days

      return { success: true, user };
    } else {
      return { success: false, message: "Invalid credentials" };
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.detail || "Login failed",
    };
  }
};

// Logout API (clears tokens)
export const logout = async () => {
  try {
    const response = await apiClient.post("/api/auth/logout/");
    if (response.status === 200) {
      console.log("Logout successful.");
    } else {
      console.warn(`Unexpected response status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error during logout:", error);
  } finally {
    // Remove tokens regardless of api success and redirect to login page
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    window.location.href = "/login";
  }
};

// Refresh Token API
export const refreshToken = async () => {
  try {
    const refresh = Cookies.get("refresh_token");
    if (!refresh) return { success: false };

    const response = await apiClient.post("/api/auth/refresh/", { refresh });

    if (response.data.access) {
      Cookies.set("access_token", response.data.access, { expires: 1 });
      return { success: true };
    } else {
      logout();
      return { success: false };
    }
  } catch (error) {
    logout();
    return { success: false };
  }
};
