import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  checkCreatePassword,
  checkEmail,
} from '../../lib/helpers/checkers.helper';
import { ILogin, StatusIcon } from '../../lib/interfaces/auth.interface';
import ButtonForm from './ButtonForm';
import Field from './Field';

interface ISignUpForm {
  type?: 'signup' | 'signUpPopUp';
}

const SignUpForm: React.FC<ISignUpForm> = ({ type = 'signup' }) => {
  const { handleSubmit, register } = useForm<ILogin>();
  const [isErrPass, setIsErrPass] = useState<StatusIcon>('');
  const [isErrEmail, setIsErrEmail] = useState<StatusIcon>('');

  const handleErrEmail = (email: string): void => {
    if (!email) return setIsErrEmail('');
    checkEmail(email) ? setIsErrEmail('success') : setIsErrEmail('error');
  };
  const handleErrPassword = (password: string): void => {
    if (!password) return setIsErrPass('');
    checkCreatePassword(password)
      ? setIsErrPass('success')
      : setIsErrPass('error');
  };

  const handleMessageErrorPassword = (): JSX.Element => {
    if (!isErrPass || isErrPass !== 'error') return <></>;
    return (
      <ul className="list-disc text-xs pl-5">
        <li>La contraseña debe tener números, minúsculas y mayúsculas</li>
      </ul>
    );
  };

  const Submit = handleSubmit((data) => {
    console.log(data);
    // Analizar datos
    const { email, firstname, lastname, password } = data;
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
        onChange={handleErrEmail}
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
        statusErrPass={isErrPass}
        title="Incorrect format"
        onChange={handleErrPassword}
      />
      {handleMessageErrorPassword()}

      <ButtonForm to="log-in" text="signup" type={type} />
    </form>
  );
};

export default SignUpForm;
