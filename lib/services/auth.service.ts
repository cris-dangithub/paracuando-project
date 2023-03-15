import axios from '../helpers/axios.helper.';

import { User } from '../interfaces/user.interface';

function createUser(user: User) {
  return axios.post(`/auth/sign-up`, user);
}

export { createUser };
