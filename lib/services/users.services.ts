import axios from 'axios';
import { getConfig } from '../helpers/getConfig';
import { GetUsers, UpdateUser } from '../interfaces/user.interface';
import { BASE_URL } from './BASE_URL';

const getUsers = (data: GetUsers) => {
  let queries = '?';
  let counter = 0;
  for (const query in data) {
    if (counter) {
      queries += `&${query}=${data[query as keyof GetUsers]}`;
      continue;
    }
    queries += `${query}=${data[query as keyof GetUsers]}`;
    counter += 1;
  }
  return axios.get(`${BASE_URL}/users/${queries}`, getConfig());
};

const getUserByID = (userID: string) => {
  return axios.get(`${BASE_URL}/users/${userID}`, getConfig());
};

const updateUser = (userID: string, data: UpdateUser) => {
  return axios.put(`${BASE_URL}/users/${userID}/`, data, getConfig());
};

const updateUserImage = (userID: string, image?: any) => {
  return axios.post(`${BASE_URL}/users/${userID}/add-image`, image);
};

export { getUsers, getUserByID, updateUser, updateUserImage };
