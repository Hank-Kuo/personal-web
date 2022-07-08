import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import Toast from '../components/Toast';

import { getUserCookies } from '../core/utils/cookie';

axios.defaults.timeout = 5000; // 5 second

axios.defaults.baseURL = 'https://hank-kuo.herokuapp.com/api/v1' //'http://ec2-3-236-187-128.compute-1.amazonaws.com:3000/api/v1'; // 域名

axios.interceptors.request.use(
  async (config) => {
    const userInfo = await getUserCookies();
    if (userInfo) {
      config.headers.Authorization = 'Bearer ' +userInfo.token;
    }
    config.headers["Access-Control-Allow-Origin"]= "*"
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    const { response } = err;
    let msg = '';
    let flag = true;
    if (response) {
      switch (err.response.status) {
        case 404:
          msg = 'Server not Found';
          console.log('找不到該頁面');
          break;
        case 500:
          msg = 'Server Error';
          console.log('伺服器出錯');
          break;
        case 503:
          msg = 'Server Unavailable';
          console.log('服務失效');
          break;
        case 401:
          flag = false;
          msg = 'Auth Error';
          console.log('登入錯誤');
          break;
        default:
          msg = 'Connect Error';
          console.log(`連接錯誤${err.response.status}`);
          break;
      }
    } else {
      msg = 'Network Error';
    }
    if (flag) {
      toast.error(<Toast message={msg} />);
    }

    return Promise.reject(err);
  },
);

export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: params })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function get(url, id) {
  return new Promise((resolve, reject) => {
    axios
      .get(url + `/${id}`)
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
