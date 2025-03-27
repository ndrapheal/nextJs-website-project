import axios from "axios";

// Tạo instance axios
const api = axios.create({
  baseURL: process.env.local.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor thêm token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Xử lý lỗi chung
export const handleApiError = (error) => {
  if (error.response) {
    console.error("Server Error:", error.response.data);
    return error.response.data;
  } else if (error.request) {
    console.error("Network Error:", error.request);
    return { message: "Không thể kết nối đến máy chủ" };
  } else {
    console.error("Error:", error.message);
    return { message: "Đã xảy ra lỗi không xác định" };
  }
};

export default api;
