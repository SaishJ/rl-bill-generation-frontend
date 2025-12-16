import { instance } from "./instance";

export const api = {
  login: (data) => instance.post("/login", data),
};
