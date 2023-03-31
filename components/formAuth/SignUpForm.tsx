import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import {
  checkCreatePassword,
  checkEmail,
} from '../../lib/helpers/checkers.helper';
import { ILogin, StatusIcon } from '../../lib/interfaces/auth.interface';
import { createUser } from '../../lib/services/auth.service';
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

  const HandleMessageErrEmail = (): JSX.Element => {
    if (!isErrEmail || isErrEmail !== 'error') return <></>;
    return (
      <ul className="list-disc text-xs pl-5">
        <li>El usuario ya se encuentra registrado</li>
      </ul>
    );
  };
  console.log(errorsForm);

  const HandleMessageErrorPassword = (): JSX.Element => {
    if (!isErrPass || isErrPass !== 'error') return <></>;
    if (
      errorsForm &&
      errorsForm.data.errors[0].message === 'email must be unique'
    ) {
      return (
        <ul className="list-disc text-xs pl-5">
          <li>La contraseña debe tener números, minúsculas y mayúsculas</li>
        </ul>
      );
    }
    return <></>;
  };

  const successSubmit = (data: any) => {
    Swal.fire({
      icon: 'success',
      text: data.results,
      iconColor: '#f3f243',
      background: '#1a1e2e',
    }).then((result) => {
      router.push('/log-in');
    });
  };
  const errorSubmit = (errResponse: any) => {
    console.log(errResponse);
    setIsErrEmail('error');
    setErrorsForm(errResponse);
    Swal.fire({
      icon: 'error',
      iconColor: '#ef3f47',
      background: '#1a1e2e',
    });
  };

  const Submit = handleSubmit((data) => {
    console.log(data);
    // Analizar datos
    const { email, password } = data;
    if (!handleErrPassword(password) || !handleErrEmail(email)) return;
    createUser(data)
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
        onChange={handleErrEmail}
      />
      <HandleMessageErrEmail />
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
      <HandleMessageErrorPassword />

      <ButtonForm to="log-in" text="signup" type={type} />
    </form>
  );
};

export default SignUpForm;
