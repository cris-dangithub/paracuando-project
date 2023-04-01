export interface User {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface UserCredentials extends Pick<User, 'email' | 'password'> {}
