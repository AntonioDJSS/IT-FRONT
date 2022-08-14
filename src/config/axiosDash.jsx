import axios from "axios";

const axiosDash = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_DASH}`,
});

export default axiosDash;
