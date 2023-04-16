import axios from '../helpers/axios.helper.';
import { IRecover } from '../interfaces/auth.interface';

import { User, UserCredentials } from '../interfaces/user.interface';

const createUser = (user: User) => {
  return axios.post(`/auth/sign-up`, user);
};

const loginUser = (credentials: UserCredentials) => {
  return axios.post(`/auth/login`, credentials);
};

const getUser = (headers: any) => {
  return axios.get(`/auth/me`, headers);
};

const changePasswordPetition = (email: IRecover) => {
  console.log(email);
  return axios.post(`/auth/forget-password`, email);
};

const changePassword = (headers: any, password: string) => {
  return axios.post(`/auth/change-password`, password, headers);
};

export {
  createUser,
  loginUser,
  getUser,
  changePasswordPetition,
  changePassword,
};
