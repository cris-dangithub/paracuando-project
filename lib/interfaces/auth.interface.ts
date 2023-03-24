export type ValuesForm = 'email' | 'password' | 'firstname' | 'lastname';

export interface ILogin {
  email: string;
  password: string;
}

export interface ISignup extends ILogin {
  firstname: string;
  lastname: string;
}
