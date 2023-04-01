import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ILogin, StatusIcon } from '../../lib/interfaces/auth.interface';
import { loginUser } from '../../lib/services/auth.service';
import { useAppDispatch, useAppSelector } from '../../lib/store/hooks';
import { toggleVisibility } from '../../lib/store/slices/popUpAuth.slices';
import { getGlobalUser } from '../../lib/store/slices/user.slices';
import ButtonForm from './ButtonForm';
import Field from './Field';

interface ILoginForm {
  type?: 'login' | 'loginPopUp';
}

const LogInForm: React.FC<ILoginForm> = ({ type = 'login' }) => {
  const { handleSubmit, register } = useForm<ILogin>();
  const [isErrPass, setIsErrPass] = useState<StatusIcon>('');
  const [isErrEmail, setIsErrEmail] = useState<StatusIcon>('');
  const [isLogging, setIsLogging] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { popUpAuth } = useAppSelector((state) => state);

  const HandleMessageErrorEmail = (): JSX.Element => {
    if (isErrEmail === 'error') {
      return (
        <ul className="list-disc text-xs pl-5">
          <li>Esta cuenta no corresponde a ningun usuario</li>
        </ul>
      );
    }
    return <></>;
  };
  const MessageErrorPass = (): JSX.Element => {
    if (isErrPass === 'error' || isErrEmail === 'error') {
      return <li>Las credenciales están incorrectas</li>;
    }
    return <></>;
  };

  const successSubmit = (data: any) => {
    setIsErrEmail('success');
    setIsErrPass('success');
    setIsLogging(true);
    console.log(data);
    Cookies.set('token', data.token);
    dispatch(getGlobalUser());
    setTimeout(() => {
      if (popUpAuth.type === 'loginPopUp') dispatch(toggleVisibility());
      router.push('/');
    }, 1500);
  };
  const errorSubmit = (response: any) => {
    console.log(response);
    response.status === 404 ? setIsErrEmail('error') : setIsErrEmail('');
    if (response.status === 401) setIsErrPass('error');
  };
  const Submit = handleSubmit((data: ILogin) => {
    loginUser(data)
      .then(({ data }) => successSubmit(data))
      .catch(({ response }) => errorSubmit(response));
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
      <HandleMessageErrorEmail />
      <Field
        name="password"
        type="password"
        label="Contraseña"
        register={register}
        dynamicPass
      />
      <ul className="list-disc text-xs pl-5 md:list-none md:pl-0 md:text-center md:text-sm">
        <MessageErrorPass />
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
      {
        <ButtonForm
          to="sign-up"
          text="login"
          type={type}
          isLogging={isLogging}
        />
      }
    </form>
  );
};

export default LogInForm;
