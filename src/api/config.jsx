import axios from "axios";

import { getUserCookies } from "../core/utils/cookie";
import CONFIG from "../config/config";

axios.defaults.timeout = 5000; // 5 second
axios.defaults.baseURL = CONFIG.API_ENDPOINT;

axios.interceptors.request.use(
  async (config) => {
    const userInfo = await getUserCookies();
    if (userInfo) {
      config.headers.Authorization = `Bearer ${userInfo.access_token}`;
    }
    config.headers["Access-Control-Allow-Origin"] = "*";
    return config;
  },
  (error) => Promise.reject(error),
);

axios.interceptors.response.use(
  (response) => response,
  (err) => Promise.reject(err),
);

export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: { ...params } })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      },
    );
  });
}

export function remove(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.delete(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      },
    );
  });
}

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      },
    );
  });
}
