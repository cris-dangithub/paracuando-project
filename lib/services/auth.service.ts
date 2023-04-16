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

const changePasswordPetition = (email: string) => {
  return axios.post(`${BASE_URL}/auth/forget-password`, email);
};

const changePassword = (headers: any, password: string) => {
  return axios.post(`${BASE_URL}/auth/change-password`, password, headers);
};

export {
  createUser,
  loginUser,
  getUser,
  changePasswordPetition,
  changePassword,
};
