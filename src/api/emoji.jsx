import { get, put } from './config';

export const emojiAPI = {
  get: function (id) {
    return get('/emoji', id);
  },
  put: function (id, data) {
    return put('/emoji/'+id, data);
  },
};
