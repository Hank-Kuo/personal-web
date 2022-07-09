import { fetch } from "./config";

export const healthzAPI = {
  fetch() {
    return fetch("/healthz");
  },
};
