import axios from "axios";

const apiUrl = import.meta.env.VITE_APP_GA_TRACKING_ID;

if (!apiUrl) {
  throw new Error(
    "REACT_APP_API_URL is not defined in the environment variables"
  );
}

export const instance = axios.create({
  baseURL: apiUrl,
});
