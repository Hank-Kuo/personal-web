import { fetch } from "./config";

export const tagAPI = {
  fetch(params) {
    return fetch("/tags", params);
  },
};
