import { put } from "./config";

export const emojiAPI = {
  put(id, data) {
    return put(`/emoji/${id}`, data);
  },
};
