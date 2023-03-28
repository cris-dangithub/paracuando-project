import { useForm, UseFormRegister } from 'react-hook-form';
import Plus from '../../components/assets/svg/Plus';
import CategoryCard from '../../components/categories/CategoryCard';
import { ConfigLayout } from '../../components/layout/ConfigLayout';
import { NextPageWithLayout } from '../page';

type keysFormData = 'profilePicture' | 'firstname' | 'lastname' | 'interests';
type FormData = {
  profilePicture: string;
  firstname: string;
  lastname: string;
  interests: string;
};

interface InputData {
  label: string;
  register: UseFormRegister<FormData>;
  name: keysFormData;
}

const Input: React.FC<InputData> = (props) => {
  const { label, register, name } = props;
  return (
    <div className="relative">
      <label
        htmlFor={`${name}`}
        className="absolute text-[#7D7D7D] -top-[10px] left-4 bg-white pr-5 pl-4"
      >
        {label}
      </label>
      <input
        type="text"
        id={`${name}`}
        className="rounded-xl border-[#7D7D7D] border-[1px] p-3 w-full text-app-blackLight"
        {...register(`${name}`)}
      />
    </div>
  );
};

const ConfigPage: NextPageWithLayout = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      profilePicture: '',
      firstname: '',
      lastname: '',
      interests: '',
    },
  });
  const handleClick = () => {
    console.log('first');
    const inputFile = document.getElementById('profilePicture');
    inputFile?.click();
  };
  const Submit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <section className="app-flex-column gap-6 md:gap-28">
      <header className="bg-app-blue">
        <div className="app-container md:py-8 mt-0">
          <h1 className="app-title-1 text-3xl text-center md:text-start md:app-title-1 text-white">
            Perfil
          </h1>
        </div>
      </header>
      <form
        className="app-container w-full mt-0 app-flex-column"
        onSubmit={Submit}
      >
        <section className="grid gap-8">
          <h2 className="app-title-2 text-center md:text-start">
            Información de contacto
          </h2>

          <section className="app-flex-column gap-10 md:flex-row md:gap-20 ">
            <div className="app-flex-column items-center gap-4">
              <input type="file" id="profilePicture" className="hidden" />
              <button
                type="button"
                onClick={handleClick}
                className="w-56 h-52 bg-app-grayLight rounded-2xl grid place-content-center"
              >
                <Plus />
              </button>
              <label htmlFor="profilePicture" className="text-app-grayDark">
                Agrega una foto para tu perfil
              </label>
            </div>
            <div className="app-flex-column gap-9 md:justify-center md:gap-14 md:flex-1">
              <Input
                label="First Name"
                register={register}
                name={'firstname'}
              />
              <Input label="Last Name" register={register} name={'lastname'} />
            </div>
          </section>
        </section>
        <section className="grid gap-8">
          <h2 className="app-title-2 text-center mt-14 md:text-start md:mt-14">
            Mis intereses
          </h2>
          <div className="grid auto-rows-[150px] gap-5 sm:grid-cols-2 md:grid-cols-3">
            <CategoryCard categoryName="Ropa y accesorios" />
            <CategoryCard />
          </div>
        </section>
        <button className="mt-10 mb-20 self-center py-3 px-6 bg-app-blue text-white font-semibold rounded-full">
          Guardar cambios
        </button>
      </form>
    </section>
  );
};

export default ConfigPage;

ConfigPage.getLayout = (page) => {
  return <ConfigLayout>{page}</ConfigLayout>;
};
