import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// ❌ DO NOT attach token on auth routes
API.interceptors.request.use((req) => {
  if (!req.url.includes("/auth/login")) {
    const token = localStorage.getItem("token");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
  }
  return req;
});

export default API;
