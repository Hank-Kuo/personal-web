import { get, post } from './config';

export const commentsAPI = {
  get: function (id) {
    return get('/comments', id);
  },
  post: function (data) {
    return post('/comments/', data);
  },
};
