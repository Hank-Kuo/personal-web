import { fetch, post } from "./config";

export const commentsAPI = {
  fetch(params) {
    return fetch("/comments", params);
  },
  post(data) {
    return post("/comment", data);
  },
};
