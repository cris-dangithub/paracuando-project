import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { ILogin, ISignup } from '../../lib/interfaces/auth.interface';
import CircleXForm from '../assets/svg/CircleXForm';
import ButtonForm from './ButtonForm';
import Field from './Field';

interface IFormAuth {
  title: string;
  subtitle: string;
  type: 'login' | 'signup';
}

export type FormFields = ILogin | ISignup;

const FormAuthCard: React.FC<IFormAuth> = ({ title, subtitle, type }) => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormFields>();

  const Submit = (data: FormFields) => {
    console.log(data);
  };

  const loginForm = (
    <form onSubmit={handleSubmit(Submit)} className="grid gap-2 mt-6">
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

  const signupForm = (
    <form onSubmit={handleSubmit(Submit)} className="grid gap-2 mt-6">
      <Field
        name="email"
        type="email"
        label="Email"
        register={register}
        placeholder="ejemplo@mail.com"
      />
      <div className="flex w-full gap-2">
        <Field
          name="firstname"
          type="text"
          label="Nombre"
          register={register}
          placeholder="Erik"
        />
        <Field
          name="lastname"
          type="text"
          label="Apellido"
          register={register}
          placeholder="Perez"
        />
      </div>
      <Field
        name="password"
        type="password"
        label="Contraseña"
        register={register}
      />
      <ul className="list-disc text-xs pl-5">
        <li>La contraseña debe números, minúsculas y mayúsculas</li>
      </ul>
      <ButtonForm to="log-in" text="signup" />
    </form>
  );

  const generateForm = () => {
    if (type === 'login') return loginForm;
    if (type === 'signup') return signupForm;
  };

  return (
    <div className="bg-black/70 text-app-grayLighter w-full max-w-xl px-10 py-14 relative rounded-3xl border border-app-gray">
      <button
        className="absolute top-4 right-4"
        onClick={() => router.push('/')}
      >
        <CircleXForm />
      </button>
      <h2 className="text-3xl font-semibold">{title}</h2>
      <h3 className="text-sm mt-3">{subtitle}</h3>
      {generateForm()}
    </div>
  );
};

export default FormAuthCard;
