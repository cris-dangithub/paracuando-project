import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import customSwalAlert from '../../components/alerts/swal';
import Logo from '../../components/assets/logo/Logo';
import { categories } from '../../lib/data/categories';
import { useTags } from '../../lib/services/tags.services';
type FormValues = {
  postTitle: string;
  type: string;
  category: string;
  why: string;
  referenceLink: string;
};
const CreateEventPage = () => {
  const [publications, setPublications] = useState();
  const [step, setStep] = useState<boolean>(true);
  const [dataEvent, setDataEvent] = useState<FormValues | undefined>();
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  function handleButtonClick() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) {
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    };
    input.click();
  }
  function handleButtonClick2() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) {
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    };
    input.click();
  }
  function handleButtonClick3() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) {
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    };
    input.click();
  }
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      postTitle: '',
      type: '',
      category: '',
      why: '',
      referenceLink: '',
      image: '',
    },
  });
  console.log(dataEvent);
  const onSubmit = async (data: FormValues) => {
    console.log('Me estoy ejecutandoooooooo');
    setDataEvent(data);
  };
  const handleClick = () => {
    step ? router.back() : setStep(true);
  };
  const nextStep = handleSubmit((data) => {
    const fieldNames: FormValues = {
      postTitle: 'Titulo de publicación',
      type: 'Tipo',
      category: 'Categoría',
      why: '¿Por qué lo recomiendas?',
      referenceLink: 'Link de referencia',
    };
    // validate forms
    const errors = [];
    for (const field in data) {
      const valueField = data[field as keyof FormValues];
      if (['image', 'referenceLink'].includes(field)) continue;
      if (!valueField) errors.push(fieldNames[field as keyof FormValues]);
    }
    console.log(errors);
    if (errors.length) {
      customSwalAlert({
        icon: 'warning',
        title: 'Información faltante necesaria',
        props: {
          text: `Campos faltantes: ${errors.join(', ')}`,
        },
      });
      return;
    }
    // if all good, next step
    setStep(false);
  });
  const router = useRouter();
  const { tags } = useTags({});

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
              <form onSubmit={nextStep} className="flex flex-col gap-3">
                <div className="relative mb-7">
                  <label className="flex flex-col gap-1">
                    <span className="absolute bg-[#FFFFFF] left-5 -top-3 px-2 text-app-text_form font-normal">
                      Titulo de publicación
                    </span>
                    <input
                      className="p-4 border border-custom rgba(125, 125, 125, 1) rounded-xl"
                      type="text"
                      {...register('postTitle')}
                    />
                  </label>
                </div>
                <div className="md:flex md:justify-between mb-7">
                  <div className="p-4 border border-custom rgba(125, 125, 125, 1) rounded-xl md:w-[280px] mb-7">
                    <select
                      id="type"
                      {...register('type')}
                      defaultValue={watch('type')}
                      className="outline-none w-full"
                    >
                      <option
                        value=""
                        disabled
                        className="text-app-text_form font-normal"
                      >
                        Tipo
                      </option>
                      {categories?.map((category) => (
                        <option
                          key={category.id}
                          value={category.name}
                          className="text-app-text_form font-normal"
                        >
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="p-4 border border-custom rgba(125, 125, 125, 1) rounded-xl md:w-[280px] mb-7">
                    <label
                      className="flex flex-col gap-1"
                      {...register('category')}
                    >
                      <select
                        id="category"
                        {...register('category')}
                        defaultValue=""
                        className="outline-none"
                      >
                        <option
                          value=""
                          className="text-app-text_form font-normal"
                          disabled
                        >
                          Categoría
                        </option>
                        {tags?.results.results.map((tag: any) => (
                          <option
                            key={tag.id}
                            value={tag.name}
                            className="text-[#A7A6A7]"
                          >
                            {tag.name}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                </div>
                <div className="relative mb-7">
                  <span className="absolute bg-[#FFFFFF] left-5 -top-3 px-2 text-app-text_form font-normal">
                    ¿Por qué lo recomiendas?
                  </span>
                  <textarea
                    {...register('why')}
                    cols={30}
                    rows={5}
                    className="pt-[10px] p-4 border border-custom rgba(125, 125, 125, 1) rounded-xl mb-7 outline-none w-full"
                  ></textarea>
                </div>
                <div className="relative">
                  <span className="absolute bg-[#FFFFFF] left-5 -top-3 px-2 text-app-text_form font-normal">
                    Link de referencia
                  </span>
                  <input
                    className="p-4 border border-custom rgba(125, 125, 125, 1) rounded-xl w-full"
                    type="url"
                    {...register('referenceLink')}
                  />
                </div>
                <button className=" bg-app-blue text-app-grayLighter py-[13.5px] mx-[135px] mt-[42px] mb-9 rounded-[31px]">
                  Siguiente
                </button>
              </form>
            </section>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <section className="p-5 py-0">
                <h1 className="font-medium text-2xl mb-2">Fotos</h1>
                <h3 className="text-app-grayDark mb-[28px]">
                  Selecciona máximo tres fotos para crear una galería
                </h3>
                <div className="flex justify-center items-center gap-3 mb-[66px] rounded-xl border border-app-gray h-[168px] w-[372px]">
                  <input type="file" id="firstPicture" className="hidden" />
                  <button onClick={handleButtonClick}>
                    <div className="flex justify-center items-center h-[123px] w-[106px] bg-app-grayLight">
                      {imageSrc && (
                        <img className="max-w-full h-auto" src={imageSrc} />
                      )}
                    </div>
                  </button>
                  <div className="flex justify-center items-center h-[123px] w-[106px] bg-app-grayLight">
                    {imageSrc && (
                      <img className="max-w-full h-auto" src={imageSrc} />
                    )}
                  </div>
                  <div className="flex justify-center items-center h-[123px] w-[106px] bg-app-grayLight">
                    {imageSrc && (
                      <img className="max-w-full h-auto" src={imageSrc} />
                    )}
                  </div>
                </div>
                <button className=" bg-app-blue text-app-grayLighter py-[13.5px] px-8 mx-[135px] rounded-[31px] mb-9 ">
                  Publicar
                </button>
              </section>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
export default CreateEventPage;
