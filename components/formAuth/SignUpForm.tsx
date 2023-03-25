import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ILogin } from '../../lib/interfaces/auth.interface';
import ButtonForm from './ButtonForm';
import Field from './Field';

const SignUpForm = () => {
  const { handleSubmit, register } = useForm<ILogin>();
  const [errorForm, setErrorForm] = useState<boolean>(false);

  const Submit = handleSubmit((data) => {
    console.log(data);
    // Analizar datos
    const { email, firstname, lastname, password } = data;
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
        dynamicPass
      />
      <ul className="list-disc text-xs pl-5">
        <li>La contraseña debe tener números, minúsculas y mayúsculas</li>
      </ul>
      <ButtonForm to="log-in" text="signup" />
    </form>
  );
};

export default SignUpForm;
