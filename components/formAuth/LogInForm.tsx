import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  checkEmailExists,
  checkExistsPassword,
} from '../../lib/helpers/checkers.helper';
import { ILogin, StatusIcon } from '../../lib/interfaces/auth.interface';
import ButtonForm from './ButtonForm';
import Field from './Field';

interface ILoginForm {
  type?: 'login' | 'loginPopUp';
}

const LogInForm: React.FC<ILoginForm> = ({ type = 'login' }) => {
  const { handleSubmit, register } = useForm<ILogin>();
  const [isErrPass, setIsErrPass] = useState<StatusIcon>('');
  const [isErrEmail, setIsErrEmail] = useState<StatusIcon>('');

  const handleErrEmail = (email: string): void => {
    if (!email) return setIsErrEmail('');
    checkEmailExists(email) ? setIsErrEmail('success') : setIsErrEmail('error');
  };

  const handleErrPassword = (password: string): void => {
    if (!password) return setIsErrPass('');
    checkExistsPassword(password)
      ? setIsErrPass('success')
      : setIsErrPass('error');
  };

  const handleMessageErrorEmail = (): JSX.Element => {
    if (!isErrEmail || isErrEmail !== 'error') return <></>;
    return (
      <ul className="list-disc text-xs pl-5">
        <li>Esta cuenta no corresponde a ningun usuario</li>
      </ul>
    );
  };

  const Submit = handleSubmit((data: ILogin) => {
    console.log(data);
    const { email, password } = data;
    console.log(email);
    handleErrEmail(email);
    handleErrPassword(password);
  });

  return (
    <form onSubmit={Submit} className="grid gap-2 mt-6">
      <Field
        name="email"
        type="email"
        label="Email"
        register={register}
        placeholder="ejemplo@mail.com"
        statusErrEmail={isErrEmail}
      />
      {handleMessageErrorEmail()}
      <Field
        name="password"
        type="password"
        label="Contraseña"
        register={register}
        dynamicPass
      />
      <ul className="list-disc text-xs pl-5 md:list-none md:pl-0 md:text-center md:text-sm">
        <li>
          ¿Olvidaste tu contraseña?{' '}
          <Link
            className="border-b-[1px] border-app-yellow text-app-yellow"
            href="/recover"
          >
            Recupérala aquí
          </Link>
        </li>
      </ul>
      {<ButtonForm to="sign-up" text="login" type={type} />}
    </form>
  );
};

export default LogInForm;
