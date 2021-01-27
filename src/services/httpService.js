import axios from "axios";
import { mockUpClient } from "../mockServer/mockServer";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  // baseURL = "https://api/v1";
});

mockUpClient(axiosInstance);

const http = {
  get: axiosInstance.get,
  post: axiosInstance.post,
  delete: axiosInstance.delete,
  put: axiosInstance.put,
};

export default http;
