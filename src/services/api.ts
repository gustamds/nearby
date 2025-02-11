import axios from "axios";

export const api = axios.create({
  baseURL: "your-api-url",
  timeout: 10000,
});