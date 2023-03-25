import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { ILogin } from '../../lib/interfaces/auth.interface';

import ButtonForm from './ButtonForm';
import Field from './Field';

const LogInForm = () => {
  const { handleSubmit, register } = useForm<ILogin>();

  const checkEmail = (email: string) => {
    if (email.split('@').length !== 2) return false;
    return true;
  };
  const checkPassword = (pss: string) => {
    // Contraseña correcta o incorrecta (dependiendo de la respuesta del servidor)
    //...
  };

  const Submit = handleSubmit((data: ILogin) => {
    console.log(data);
    const { email, password } = data;
    console.log(checkEmail(email));
    console.log(checkPassword(password));
  });

  return (
    <form onSubmit={Submit} className="grid gap-2 mt-6">
      <Field
        name="email"
        type="email"
        label="Email"
        register={register}
        placeholder="ejemplo@mail.com"
      />
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
      <ButtonForm to="sign-up" text="login" />
    </form>
  );
};

export default LogInForm;
