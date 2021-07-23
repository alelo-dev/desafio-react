import axios from "axios";

const baseURL = process.env.API || "https://fakestoreapi.com";

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((request) => {
  return request;
});

export default instance;
