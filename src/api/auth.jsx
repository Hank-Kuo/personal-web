import { fetch, post } from './config';

export const authAPI = {
  fetch: function (paramObj) {
    return fetch('/auth/login', paramObj);
  },
  post: function (data) {
    return post('/auth/login', data);
  },
};

export const loginAPI = {
  post: function (data) {
    return post('/login', data);
  },
};
