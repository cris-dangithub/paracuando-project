import axios from 'axios';

import { User, UserCredentials } from '../interfaces/user.interface';
import { BASE_URL } from './BASE_URL';

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
