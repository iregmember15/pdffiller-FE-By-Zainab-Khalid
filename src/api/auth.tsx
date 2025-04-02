import apiClient from "./index"; // Import the Axios instance
import Cookies from "js-cookie";
import { AuthResponse } from "../@types/auth";

const setTokens = (access: string, refresh: string) => {
  Cookies.set("access_token", access, { expires: 1 }); // Expires in 1 day
  Cookies.set("refresh_token", refresh, { expires: 7 }); // Expires in 7 days
};

const removeTokens = () => {
  Cookies.remove("access_token");
  Cookies.remove("refresh_token");
};

export const login = async (payload: any): Promise<AuthResponse> => {
  try {
    const { data } = await apiClient.post("/api/auth/login/", payload);

    if (data.status === "success" && data.jwt) {
      const { access, refresh, user } = data.jwt;
      setTokens(access, refresh);
      return { success: true, user, message: "" };
    }
    return { success: false, message: "Invalid credentials" };
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.detail || "Login failed",
    };
  }
};

export const register = async (payload: any): Promise<AuthResponse> => {
  try {
    const { data } = await apiClient.post("/api/auth/register/", payload);

    if (data.access && data.refresh) {
      const { access, refresh, user } = data;
      setTokens(access, refresh);
      return { success: true, user, message: "" };
    }
    return { success: false, message: data?.detail, user: data.user };
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.detail || "Registration failed",
    };
  }
};

export const logout = async () => {
  try {
    await apiClient.post("/api/auth/logout/");
  } catch (error) {
    console.error("Error during logout:", error);
  } finally {
    removeTokens();
    window.location.href = "/";
  }
};

export const refreshToken = async (): Promise<{ success: boolean }> => {
  try {
    const refresh = Cookies.get("refresh_token");
    if (!refresh) return { success: false };

    const { data } = await apiClient.post("/api/auth/refresh/", { refresh });

    if (data.access) {
      Cookies.set("access_token", data.access, { expires: 1 });
      return { success: true };
    }
  } catch (error) {
    console.error("Error refreshing token:", error);
  }
  logout();
  return { success: false };
};
