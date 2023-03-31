import axios from '../helpers/axios.helper.';

import { User } from '../interfaces/user.interface';

const BASE_URL = 'https://paracuando-academlo-api.academlo.tech/api/v1';

const createUser = (user: User) => {
  return axios.post(`${BASE_URL}/auth/sign-up`, user);
};

export { createUser };
