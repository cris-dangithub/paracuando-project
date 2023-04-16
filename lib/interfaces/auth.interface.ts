export type ValuesForm = 'email' | 'password' | 'first_name' | 'last_name';

export type StatusIcon = 'success' | 'error' | '';

export interface ILogin {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

export interface IRecover {
  email: string;
}
