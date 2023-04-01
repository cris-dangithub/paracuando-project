import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  checkCreatePassword,
  checkEmail,
} from '../../lib/helpers/checkers.helper';
import { ILogin, StatusIcon } from '../../lib/interfaces/auth.interface';
import { createUser } from '../../lib/services/auth.service';
import customSwalAlert from '../alerts/swal';
import ButtonForm from './ButtonForm';
import Field from './Field';

interface ISignUpForm {
  type?: 'signup' | 'signUpPopUp';
}

const SignUpForm: React.FC<ISignUpForm> = ({ type = 'signup' }) => {
  const { handleSubmit, register } = useForm<ILogin>();
  const [isErrPass, setIsErrPass] = useState<StatusIcon>('');
  const [isErrEmail, setIsErrEmail] = useState<StatusIcon>('');
  const [errorsForm, setErrorsForm] = useState<any>();

  const router = useRouter();

  const handleErrEmail = (email: string): boolean => {
    if (errorsForm) setErrorsForm('');
    if (!email) {
      setIsErrEmail('');
      return false;
    }
    if (checkEmail(email)) {
      setIsErrEmail('success');
      return true;
    } else {
      setIsErrEmail('error');
      return false;
    }
  };
  const handleErrPassword = (password: string): boolean => {
    if (!password) {
      setIsErrPass('');
      return false;
    }
    if (checkCreatePassword(password)) {
      setIsErrPass('success');
      return true;
    } else {
      setIsErrPass('error');
      return false;
    }
  };

  const successSubmit = (data: any) => {
    customSwalAlert({
      title: data.results,
      props: { confirmButtonText: 'Login' },
    }).then((response) => {
      router.push('/log-in');
    });
  };
  const errorSubmit = (errResponse: any) => {
    setIsErrEmail('error');
    setErrorsForm(errResponse);
    customSwalAlert({ title: 'Error', icon: 'error' });
  };

  const Submit = handleSubmit((data) => {
    // Analizar datos
    const { email, password } = data;
    if (!handleErrPassword(password) || !handleErrEmail(email)) return;
    createUser(data)
      .then(({ data }) => successSubmit(data))
      .catch(({ response }) => errorSubmit(response));
  });

  const MessageErrEmail = (): JSX.Element => {
    if (
      errorsForm &&
      errorsForm.data.errors[0].message === 'email must be unique'
    ) {
      return (
        <ul className="list-disc text-xs pl-5">
          <li>El correo ya se encuentra registrado</li>
        </ul>
      );
    }
    return <></>;
  };

  const MessageErrPassword = (): JSX.Element => {
    if (isErrPass === 'error') {
      return (
        <ul className="list-disc text-xs pl-5">
          <li>La contraseña debe tener números, minúsculas y mayúsculas</li>
        </ul>
      );
    }
    return <></>;
  };
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
      <MessageErrEmail />
      <div className="flex w-full gap-2">
        <Field
          name="first_name"
          type="text"
          label="Nombre"
          register={register}
          placeholder="Erik"
        />
        <Field
          name="last_name"
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
      <MessageErrPassword />

      <ButtonForm to="log-in" text="signup" type={type} />
    </form>
  );
};

export default SignUpForm;
