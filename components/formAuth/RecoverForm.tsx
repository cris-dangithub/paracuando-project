import { SubmitHandler, useForm } from 'react-hook-form';
import { ILogin } from '../../lib/interfaces/auth.interface';
import { changePasswordPetition } from '../../lib/services/auth.service';
import ButtonForm from './ButtonForm';
import Field from './Field';

const RecoverForm = () => {
  const { register, handleSubmit, reset } = useForm<ILogin>({
    defaultValues: {
      email: '',
    },
  });
  const onSubmit: SubmitHandler<ILogin> = (data) => {
    console.log(data);
    changePasswordPetition(data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2 mt-6">
      <Field
        type="email"
        name="email"
        register={register}
        placeholder="example@mail.com"
      />
      <ButtonForm to="log-in" text="recover" type="recover" />
    </form>
  );
};

export default RecoverForm;
