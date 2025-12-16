import axios from "axios";

const BASE_URL = "";

const instance = axios.create({
  baseURL: BASE_URL,
});

const setAuthorization = (token) => {
  instance.defaults.headers.Authorization = `Bearer ${token}`;
};

export { instance, setAuthorization };
