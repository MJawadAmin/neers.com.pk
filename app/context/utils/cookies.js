import cookie from 'cookie';

export const parseCookies = (cookieHeader) => {
  return cookie.parse(cookieHeader || ''); // Parse cookies safely
};
