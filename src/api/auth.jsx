import { post } from "./config";

export const authAPI = {
  login(data) {
    return post("/login", data);
  },
};
