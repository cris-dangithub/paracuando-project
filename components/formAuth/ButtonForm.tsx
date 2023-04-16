import Link from 'next/link';
import { useAppDispatch } from '../../lib/store/hooks';
import {
  goToCreateAccount,
  goToLoginAccount,
} from '../../lib/store/slices/popUpAuth.slices';
import Spinner from '../loaders/Spinner';

interface AuthRoutes {
  to: 'sign-up' | 'log-in';
  text: 'signup' | 'login';
  type?: 'login' | 'signup' | 'loginPopUp' | 'signUpPopUp' | 'chooseOption';
  isLogging?: boolean;
}

const ButtonForm: React.FC<AuthRoutes> = ({ to, text, type, isLogging }) => {
  const dispatch = useAppDispatch();

  const textBtn = {
    signup: 'Crear cuenta',
    login: 'Iniciar sesión',
  };
  const textAnchor = {
    signup: 'O inicia sesión',
    login: 'O crea una cuenta aquí',
  };
  const btnChooseOptions: React.ButtonHTMLAttributes<HTMLButtonElement> = {
    type: 'button',
    onClick: () => dispatch(goToCreateAccount()),
  };

  return (
    <div
      className={`flex flex-col gap-4 text-center items-center ${
        type === 'chooseOption' ? 'mt-14' : 'mt-4'
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

      {type === 'login' || type === 'signup' ? (
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
          {textAnchor[text]}
        </span>
      ) : (
        <span
          onClick={() => {
            dispatch(goToLoginAccount());
          }}
          className="border-b-[1px] border-app-yellow text-app-yellow text-sm leading-4 cursor-pointer"
        >
          {textAnchor[text]}
        </span>
      )}
    </div>
  );
};

export default ButtonForm;
