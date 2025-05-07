import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

// Set API base URL from environment variables
// const API_BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const API_BASE_URL = import.meta.env?.VITE_APP_BASE_URL || process.env.VITE_APP_BASE_URL || "";

// Create Axios instance
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Helper function to get access token
const getToken = () => Cookies.get("access_token");

// Request interceptor to attach auth token
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Response interceptor to handle unauthorized access
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized! Redirecting to login...");
      Cookies.remove("access_token");
      window.location.href = "/";
    }
    if (error.response?.status === 403) {
      console.error("Unauthorized! Redirecting to login...");
      Cookies.remove("access_token");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default apiClient;
