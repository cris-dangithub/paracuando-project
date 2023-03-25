export type ValuesForm = 'email' | 'password' | 'firstname' | 'lastname';

export type StatusIcon = 'success' | 'error' | '';

export interface ILogin {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}
