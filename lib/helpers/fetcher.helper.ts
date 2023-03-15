import axios from './axios.helper.';

export const fetcher = (url: string) =>
  axios.get(url).then((resp) => resp.data);
