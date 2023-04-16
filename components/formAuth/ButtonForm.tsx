import Link from 'next/link';
import { useAppDispatch } from '../../lib/store/hooks';
import {
  goToCreateAccount,
  goToLoginAccount,
} from '../../lib/store/slices/popUpAuth.slices';
import Spinner from '../loaders/Spinner';

interface AuthRoutes {
  to?: 'sign-up' | 'log-in';
  text: 'signup' | 'login' | 'recover';
  type:
    | 'login'
    | 'signup'
    | 'loginPopUp'
    | 'signUpPopUp'
    | 'chooseOption'
    | 'recover';
  isLogging?: boolean;
}

const ButtonForm: React.FC<AuthRoutes> = ({ to, text, type, isLogging }) => {
  const dispatch = useAppDispatch();

  const textBtn = {
    signup: 'Crear cuenta',
    login: 'Iniciar sesión',
    recover: 'Enviar correo de reestablecimiento de contraseña',
  };
  const textAnchor = {
    signup: 'O inicia sesión',
    login: 'O crea una cuenta aquí',
    recover: 'O volver a iniciar sesión',
  };
  const btnChooseOptions: React.ButtonHTMLAttributes<HTMLButtonElement> = {
    type: 'button',
    onClick: () => dispatch(goToCreateAccount()),
  };

  return (
    <div
      className={`flex flex-col gap-4 text-center items-center ${
        ['chooseOption', 'recover'].includes(type) ? 'mt-14' : 'mt-4'
      }`}
    >
      <button
        className="py-3 px-5 bg-app-yellow text-black font-semibold text-base rounded-md w-full relative"
        {...(type === 'chooseOption' ? btnChooseOptions : {})}
      >
        {textBtn[text]}
        <div className="absolute top-0 bottom-0 right-0 flex items-center">
          {isLogging && <Spinner />}
        </div>
      </button>

      {['login', 'signup', 'recover'].includes(type) ? (
        <Link
          href={`/${to}`}
          className="border-b-[1px] border-app-yellow text-app-yellow text-sm leading-4"
        >
          {textAnchor[text]}
        </Link>
      ) : type === 'loginPopUp' ? (
        <span
          onClick={() => {
            dispatch(goToCreateAccount());
          }}
          className="border-b-[1px] border-app-yellow text-app-yellow text-sm leading-4 cursor-pointer"
        >
          {textAnchor['login']}
        </span>
      ) : (
        <span
          onClick={() => {
            dispatch(goToLoginAccount());
          }}
          className="border-b-[1px] border-app-yellow text-app-yellow text-sm leading-4 cursor-pointer"
        >
          {textAnchor['signup']}
        </span>
      )}
    </div>
  );
};

export default ButtonForm;
