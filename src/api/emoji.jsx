import { get, put } from "./config";

export const emojiAPI = {
  get(id) {
    return get("/emoji", id);
  },
  put(id, data) {
    return put(`/emoji/${id}`, data);
  },
};
