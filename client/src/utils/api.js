import axios from "axios";

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? "https://au-ecdsa-node-pvu9.vercel.app/api" : "http://localhost:1225/api",
});

export default api;
