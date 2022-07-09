import { get, post } from "./config";

export const commentsAPI = {
  get(id) {
    return get("/comments", id);
  },
  post(data) {
    return post("/comments/", data);
  },
};
