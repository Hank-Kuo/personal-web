import Cookies from "universal-cookie";

export const setVisitorCookies = (id) => {
  const cookies = new Cookies();
  const date = new Date();
  date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000); // 1 days

  if (cookies.get(`hank-kuo/visitor/${id}`) === undefined) {
    cookies.set(`hank-kuo/visitor/${id}`, true, { path: "/", expires: date });
    return true;
  }
  return false;
};

export const setEmojiCookies = (id, emoji) => {
  const cookies = new Cookies();
  cookies.set(`hank-kuo/emoji/${id}`, emoji);
};

export const getEmojiCookies = (id) => {
  const cookies = new Cookies();
  return cookies.get(`hank-kuo/emoji/${id}`);
};

export const setUserCookies = (data) => {
  const cookies = new Cookies();
  const date = new Date();
  date.setTime(date.getTime() + data.expired_in * 1000); // 8 hrs

  if (cookies.get("user") === undefined) {
    cookies.set("user", data, { expires: date });
    console.log("set user");
  }
};

export const getUserCookies = () => {
  const cookies = new Cookies();
  const user = cookies.get("user");
  return user;
};
