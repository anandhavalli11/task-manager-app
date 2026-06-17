import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://task-manager-app-r33w.onrender.com",
});

export default API;