import { fetch, post } from "./config";

export const blogAPI = {
  fetch() {
    return fetch("/blogs");
  },
  get(id) {
    return fetch(`/blog/${id}`);
  },
  post(data) {
    return post("/blog", data);
  },
  visitor(params) {
    return fetch("/visit", params);
  },
};
