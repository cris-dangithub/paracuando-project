import Cookies from 'js-cookie';

const getConfig = () => ({
  headers: {
    Authorization: `Bearer ${Cookies.get('token')}`,
  },
});

export default getConfig;
