import { fetch, post } from "./config";

export const authAPI = {
  fetch(paramObj) {
    return fetch("/auth/login", paramObj);
  },
  post(data) {
    return post("/auth/login", data);
  },
};

export const loginAPI = {
  post(data) {
    return post("/login", data);
  },
};
