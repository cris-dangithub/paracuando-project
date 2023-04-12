import { SubmitHandler, useForm } from 'react-hook-form';
import { ILogin } from '../../lib/interfaces/auth.interface';
import Field from './Field';

const RecoverForm = () => {
  const { register, handleSubmit, reset } = useForm<ILogin>({
    defaultValues: {
      email: '',
    },
  });
  const onSubmit: SubmitHandler<ILogin> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field
        type="email"
        name="email"
        register={register}
        placeholder="example@mail.com"
      />
      <button>Enviar</button>
    </form>
  );
};

export default RecoverForm;
