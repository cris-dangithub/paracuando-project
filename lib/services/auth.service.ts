import axios from '../helpers/axios.helper.';

import { User, UserCredentials } from '../interfaces/user.interface';

const BASE_URL = 'https://paracuando-academlo-api.academlo.tech/api/v1';

const createUser = (user: User) => {
  return axios.post(`${BASE_URL}/auth/sign-up`, user);
};

const loginUser = (credentials: UserCredentials) => {
  return axios.post(`${BASE_URL}/auth/login`, credentials);
};

const getUser = (headers: any) => {
  return axios.get(`${BASE_URL}/auth/me`, headers);
};

export { createUser, loginUser, getUser };
