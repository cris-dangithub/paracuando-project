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

  console.log(dataEvent);

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    setStep(false);
    setDataEvent(data);
  };

  const handleClick = () => {
    step ? router.back() : setStep(true);
  };

  const router = useRouter();
  return (
    <div className="max-w-md mx-auto h-screen sm:max-w-xl md:flex md:mx-auto md:max-w-[1280px]">
      <section className="bg-app-blue flex flex-col items-center justify-center p-5 gap-5 md:max-w-[255px] md:justify-start">
        <Link className="md:mt-[126px]" href={'/'}>
          <Logo variant="white" onlyIcon={false} />
        </Link>
        <h2 className="text-app-yellow self-start sm:text-lg md:mt-[100px]">
          ¡Bienvenido, creador!
        </h2>
        <p className="text-app-grayLighter sm:text-lg">
          A continuación puedes completar la info de la marca, artista o torneo
          que quieres cerca.
        </p>
        <span className="opacity-0 md:opacity-100 md:mt-28 md:self-start md:text-slate-300">
          Ayuda
        </span>
      </section>

      <div className="md:min-w-[800px] md:flex md:flex-col md:items-center md:justify-center md:mx-auto md:relative">
        <div className="md:min-w-[620px] md:flex md:flex-col md:items-center md:justify-center md:mx-auto ">
          <section className="p-5 pb-0 w-full">
            <button
              onClick={handleClick}
              className="text-app-blue font-medium text-base sm:text-lg md:absolute md:left-3"
            >
              Back
            </button>

            {step ? (
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-app-grayLight my-11 md:static">
                <div className="bg-blue-600 h-2.5 rounded-full w-1/2"></div>
              </div>
            ) : (
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-app-grayLight my-11 md:static">
                <div className="bg-blue-600 h-2.5 rounded-full"></div>
              </div>
            )}
          </section>

          {step ? (
            <section className="p-5 py-0 w-full">
              <h1 className="font-medium text-2xl">Publicación</h1>
              <h3 className="text-app-grayDark mb-[54px] text-base">
                Información básica
              </h3>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3"
              >
                <div className="relative mb-7">
                  <label className="flex flex-col gap-1">
                    <span className="absolute bg-[#ffffff] left-5 -top-3 px-2 text-app-text_form font-normal">
                      Titulo de publicación
                    </span>
                    <input
                      className="p-4 border border-custom rgba(125, 125, 125, 1) rounded-xl"
                      type="text"
                      {...register('postTitle')}
                    />
                  </label>
                </div>

                <div className="md:flex justify-between mb-7">
                  <div className="p-4 border border-custom rgba(125, 125, 125, 1) rounded-xl w-[280px]">
                    <label className="flex flex-col gap-1">
                      <select name="type" id="type">
                        <option
                          value="marcas-y-tiendad"
                          className="text-app-text_form font-normal"
                        >
                          Tipo
                        </option>
                        <option
                          value="marcas-y-tiendad"
                          className="text-[#A7A6A7]"
                        >
                          Marcas y tiendas
                        </option>
                        <option
                          value="artistas-y-conciertos"
                          className="text-[#A7A6A7]"
                        >
                          Artistas y conciertos
                        </option>
                        <option value="torneos" className="text-[#A7A6A7]">
                          Torneos
                        </option>
                        <input {...register('type')} />
                      </select>
                    </label>
                  </div>
                  <div className="p-4 border border-custom rgba(125, 125, 125, 1) rounded-xl w-[280px]">
                    <label className="flex flex-col gap-1">
                      <select name="category" id="category">
                        <option
                          value="select"
                          className="text-app-text_form font-normal"
                        >
                          Categoría
                        </option>
                        <option
                          value="ropa-y-accesorios"
                          className="text-[#A7A6A7]"
                        >
                          Ropa y accesorios
                        </option>
                        <option value="deportes" className="text-[#A7A6A7]">
                          Deportes
                        </option>
                        <option value="conciertos" className="text-[#A7A6A7]">
                          Conciertos
                        </option>
                        <option value="meet-&-grred" className="text-[#A7A6A7]">
                          Meet & Greet
                        </option>
                        <option value="e-sport" className="text-[#A7A6A7]">
                          E-sport
                        </option>
                        <option value="pop-rock" className="text-[#A7A6A7]">
                          Pop - Rock
                        </option>
                        <option value="tecnologia" className="text-[#A7A6A7]">
                          Tecnología
                        </option>
                        <option
                          value="hogar-decoracion"
                          className="text-[#A7A6A7]"
                        >
                          Hogar - Decoración
                        </option>
                        <option
                          value="abastecimiento"
                          className="text-[#A7A6A7]"
                        >
                          Abastecimiento
                        </option>
                        <input {...register('category')} />
                      </select>
                    </label>
                  </div>
                </div>

                <div className="relative mb-7">
                  <label htmlFor="why" className="flex flex-col gap-1">
                    <span className="absolute bg-[#ffffff] left-5 -top-3 px-2 text-app-text_form font-normal">
                      ¿Por qué lo recomiendas?
                    </span>
                    <textarea id="why" cols={30} rows={10}></textarea>

                    <input
                      className="p-4 border border-custom rgba(125, 125, 125, 1) rounded-xl h-[116px]"
                      type="text"
                      {...register('why')}
                    />
                  </label>
                </div>

                <div className="relative">
                  <label className="flex flex-col">
                    <span className="absolute bg-[#ffffff] left-5 -top-3 px-2 text-app-text_form font-normal">
                      Link de referencia
                    </span>
                    <input
                      className="p-4 border border-custom rgba(125, 125, 125, 1) rounded-xl"
                      type="password"
                      {...register('referenceLink')}
                    />
                  </label>
                </div>

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
              <button className=" bg-app-blue text-app-grayLighter py-[13.5px] px-8 mx-[135px] rounded-[31px] mb-9 ">
                Publicar
              </button>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};
export default CreateEventPage;
