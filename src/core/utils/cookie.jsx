import Cookies from 'universal-cookie';

export const setCookies = (id) => {
  const cookies = new Cookies();
  const date = new Date();
  date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);

  if (cookies.get('track/' + id) == undefined) {
    cookies.set('track/' + id, true, { path: '/', expires: date });
    console.log(cookies.get('track/' + id));
  }
};
