import { fetch, get, post, put } from './config';

export const blogAPI = {
  fetch: function () {
    return fetch('/blog/');
  },
  get: function (id) {
    return get('/blog', id);
  },
  post: function (data) {
    return post('/auth/blog', data);
  },
  put: function (id, data) {
    return put('/blog/' + id, data);
  },
};
