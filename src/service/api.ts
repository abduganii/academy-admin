import axios from "axios";
import { QueryClient } from "react-query";
import qs from "qs";
import { Store } from "../utils/storage";
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BACKEND_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",

  },
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: "repeat" });
  }
});

api.interceptors.request.use(
  (config: any) => {
  
    if (Store.getToken()) {
      config.headers["Authorization"] = `Bearer ${Store.getToken()}`;
    }
    config.headers['lang'] = Store.getLang()
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
});

export default api;
