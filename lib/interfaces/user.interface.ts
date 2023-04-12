export interface User {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface UserCredentials extends Pick<User, 'email' | 'password'> {}

export interface GetUsers {
  page?: string;
  size?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  username?: string;
  email_verified?: string;
  country_id?: string;
  code_phone?: string;
  phone?: string;
  created_at?: string;
}

export interface UpdateUser {
  first_name?: string;
  last_name?: string;
  code_phone?: string;
  phone?: string;
  interest?: string;
}
