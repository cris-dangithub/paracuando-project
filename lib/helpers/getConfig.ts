import Cookies from 'js-cookie';

export const getConfig = (token?: string) => {
  if (token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }
  return {
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
    },
  };
};
