import axios from "axios";
import Cookies from "js-cookie";

// Set the base URL for API calls
const API_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

// Create an Axios instance
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Ensures cookies are sent with requests
});

// Add an interceptor to attach the authentication token from cookies
apiClient.interceptors.request.use(
  (config: any) => {
    const token = Cookies.get("access_token"); // Retrieve token from cookies
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => Promise.reject(error)
);

// Handle API errors (e.g., logout user if token is expired)
apiClient.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized! Redirecting to login...");
      Cookies.remove("access_token"); // Remove token from cookies
      window.location.href = "/login"; // Redirect user to login page
    }
    return Promise.reject(error);
  }
);

export default apiClient;
