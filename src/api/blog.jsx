import {
  fetch, get, post, put,
} from "./config";

export const blogAPI = {
  fetch() {
    return fetch("/blog/");
  },
  get(id) {
    return get("/blog", id);
  },
  post(data) {
    return post("/auth/blog", data);
  },
  put(id, data) {
    return put(`/blog/${id}`, data);
  },
};
