import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Logo from '../../components/assets/logo/Logo';

type FormValues = {
  postTitle: string;
  type: string;
  category: string;
  why: string;
  referenceLink: string;
};

const CreateEventPage = () => {
  const [step, setStep] = useState<boolean>(true);
  const [dataEvent, setDataEvent] = useState<FormValues | undefined>();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      postTitle: '',
      type: '',
      category: '',
      why: '',
      referenceLink: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    setStep(false);
    setDataEvent(data);
  };
  const router = useRouter();
  return (
    <div className="max-w-[414px] m-auto">
      <section className="bg-app-blue flex flex-col items-center justify-center p-5 gap-5">
        <Link href={'/'}>
          <Logo variant="white" onlyIcon={false} />
        </Link>
        <h2 className="text-app-yellow self-start">¡Bienvenido, creador!</h2>
        <p className="text-app-grayLighter">
          A continuación puedes completar la info de la marca, artista o torneo
          que quieres cerca.
        </p>
      </section>
      <section className="p-5 pb-0">
        <button
          onClick={() => {
            router.back();
          }}
          className="text-app-blue font-medium"
        >
          Back
        </button>
        {step ? (
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-app-grayLight my-11">
            <div className="bg-blue-600 h-2.5 rounded-full w-1/2"></div>
          </div>
        ) : (
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-app-grayLight my-11">
            <div className="bg-blue-600 h-2.5 rounded-full"></div>
          </div>
        )}
      </section>

      {step ? (
        <section className="p-5 py-0">
          <h1 className="font-medium text-2xl">Publicación</h1>
          <h3 className="text-app-grayDark mb-[54px]">Información básica</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <label className="flex flex-col gap-1">
              <span className="font-semibold">Titulo de publicación</span>
              <input
                className="p-4 border border-app-grayDark"
                type="text"
                {...register('postTitle')}
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-semibold">Tipo</span>
              <select name="type" id="type">
                <option value="marcas-y-tiendad">Marcas y tiendas</option>
                <option value="artistas-y-conciertos">
                  Artistas y conciertos
                </option>
                <option value="torneos">Torneos</option>
                <input {...register('type')} />
              </select>
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-semibold">Categoría</span>
              <select name="category" id="category">
                <option value="ropa-y-accesorios">Ropa y accesorios</option>
                <option value="deportes">Deportes</option>
                <option value="conciertos">Conciertos</option>
                <option value="meet-&-grred">Meet & Greet</option>
                <option value="e-sport">E-sport</option>
                <option value="pop-rock">Pop - Rock</option>
                <option value="tecnologia">Tecnología</option>
                <option value="hogar-decoracion">Hogar - Decoración</option>
                <option value="abastecimiento">Abastecimiento</option>
                <input {...register('category')} />
              </select>
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-semibold">¿Por qué lo recomiendas?</span>
              <input
                className="p-4 border border-app-grayDark"
                type="text"
                {...register('why')}
              />
            </label>
            <label className="flex flex-col">
              <span className="font-semibold">Link de referencia</span>
              <input
                className="p-4 border border-app-grayDark"
                type="password"
                {...register('referenceLink')}
              />
            </label>
            <button className=" bg-app-blue text-app-grayLighter py-[13.5px] mx-[135px] mt-[42px] mb-9 rounded-[31px]">
              Siguiente
            </button>
          </form>
        </section>
      ) : (
        <section className="p-5 py-0">
          <h1 className="font-medium text-2xl mb-2">Fotos</h1>
          <h3 className="text-app-grayDark mb-[28px]">
            Selecciona máximo tres fotos para crear una galería
          </h3>
          <div className="flex justify-center items-center gap-3 mb-[66px] rounded-xl border border-app-gray h-[168px] w-[372px]">
            <div className="flex justify-center items-center h-[123px] w-[106px] bg-app-grayLight">
              +
            </div>
            <div className="flex justify-center items-center h-[123px] w-[106px] bg-app-grayLight">
              +
            </div>
            <div className="flex justify-center items-center h-[123px] w-[106px] bg-app-grayLight">
              +
            </div>
          </div>
          <button className=" bg-app-blue text-app-grayLighter py-[13.5px] px-8 mx-[135px] rounded-[31px] mb-9">
            Publicar
          </button>
        </section>
      )}
    </div>
  );
};
export default CreateEventPage;
