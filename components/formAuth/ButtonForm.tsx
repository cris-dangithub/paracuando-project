import Link from 'next/link';

interface AuthRoutes {
  to: 'sign-up' | 'log-in';
  text: 'signup' | 'login';
}

const ButtonForm: React.FC<AuthRoutes> = ({ to, text }) => {
  const textBtn = {
    signup: 'Crear cuenta',
    login: 'Iniciar sesión',
  };
  const textAnchor = {
    signup: 'O inicia sesión',
    login: 'O crea una cuenta aquí',
  };

  return (
    <div className="flex flex-col gap-4 text-center mt-4 items-center">
      <button className="py-3 px-5 bg-app-yellow text-black font-semibold text-base rounded-md w-full">
        {textBtn[text]}
      </button>
      <Link
        href={`/${to}`}
        className="border-b-[1px] border-app-yellow text-app-yellow text-sm leading-4"
      >
        {textAnchor[text]}
      </Link>
    </div>
  );
};

export default ButtonForm;
