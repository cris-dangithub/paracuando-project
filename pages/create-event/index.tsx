import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dispatch, RefObject, SetStateAction, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import customSwalAlert from '../../components/alerts/swal';
import Logo from '../../components/assets/logo/Logo';
import CircleXForm from '../../components/assets/svg/CircleXForm';
import Plus from '../../components/assets/svg/Plus';
import { categories } from '../../lib/data/categories';
import {
  addImagePublication,
  addPubliction,
} from '../../lib/services/publications.services';
import { useTags } from '../../lib/services/tags.services';
export type FormValues = {
  title: string;
  publication_type_id: string;
  tags: string;
  description: string;
  reference_link: string;
  content?: string;
};
interface ImageField {
  imgSrc: string;
  idx: number;
  inputElement: RefObject<HTMLInputElement>;
  imageSrc: string[];
  images: (string | File)[];
  setImageSrc: Dispatch<SetStateAction<string[]>>;
  setImages: Dispatch<SetStateAction<(string | File)[]>>;
}
const CreateEventPage = () => {
  const [step, setStep] = useState<boolean>(true);
  const [imageSrc, setImageSrc] = useState<string[]>(['', '', '']);
  const [images, setImages] = useState<Array<string | File>>(['', '', '']);
  const inputElement = useRef<HTMLInputElement>(null);
  function handleChange() {
    const files = inputElement.current?.files;
    // Contar espacios disponibles en imageSrc
    let maxFiles = 0;
    imageSrc.forEach((img) => {
      if (!img) maxFiles++;
    });
    if (!files) return;
    // Comprobar espacios junto con los archivos seleccionados
    if (files.length > maxFiles) {
      // error
      customSwalAlert({
        title: 'Cantidad de archivos excedida',
        icon: 'error',
        props: { text: `Máximos archivos posibles: ${maxFiles}` },
      });
      return;
    }
    // Agregar los archivos al arreglo de imágenes
    const newImageSrc = [...imageSrc];
    const newImages = [...images];
    for (let i = 0; i < files.length; i++) {
      const index = newImageSrc.indexOf('');
      newImageSrc[index] = URL.createObjectURL(files[i]);
      newImages[index] = files[i];
    }
    setImageSrc(newImageSrc);
    setImages(newImages);
  }

  // !!!!!!!!!!!!!!!!!!!!!! COMPONENTE LOCAL
  const ImageField: React.FC<ImageField> = ({
    imgSrc,
    idx,
    inputElement,
    imageSrc,
    images,
    setImageSrc,
    setImages,
  }) => {
    function handleButtonClick() {
      if (!imgSrc) {
        inputElement.current?.click();
        return;
      }
      deleteImage();
    }
    function deleteImage() {
      const newImageSrc = [...imageSrc];
      const newImages = [...images];
      newImageSrc.splice(idx, 1);
      newImages.splice(idx, 1);
      newImageSrc.push('');
      newImages.push('');
      setImageSrc(newImageSrc);
      setImages(newImages);
    }
    return (
      <button onClick={handleButtonClick} type="button">
        <div className="flex justify-center items-center h-[123px] w-[106px] bg-app-grayLight relative">
          {imgSrc ? (
            <>
              <Image
                width={150}
                height={100}
                alt="image"
                className="w-full h-full object-cover"
                src={imgSrc}
              />
              <div
                className="images-delete-container absolute w-full h-full bg-black/0 flex justify-center items-center hover:bg-black/25 ease-in duration-100"
                onClick={deleteImage}
              >
                <CircleXForm className="images-delete-btn translate-y-8 duration-100 opacity-0" />
              </div>
            </>
          ) : (
            <Plus />
          )}
        </div>
      </button>
    );
  };

  const { register, handleSubmit, watch } = useForm<FormValues>({
    defaultValues: {
      title: '',
      publication_type_id: '',
      tags: '',
      description: '',
      reference_link: '',
    },
  });
  const onSubmit = async (dataForm: FormValues) => {
    try {
      // Agregar "content" a data
      dataForm.content = '';
      // Agregar publicación (servicio)
      const { data } = await addPubliction(dataForm);
      const { id } = data.results;
      const formData = new FormData();
      images.forEach((image) => {
        formData.append(`images`, image);
      });
      // Agregar imagen a la publicación (servicio)
      const resImg = await addImagePublication(id, formData);
      // Alerta que diga que la publicación ha sido creada exitosamente, y luego volver al inicio
      customSwalAlert({
        icon: 'success',
        title: 'Publicación creada exitosamente',
        props: {
          text: `Imagenes añadidas a la publicación: ${resImg.data.results.imagesUploaded.length}`,
        },
      });
    } catch (err) {
      console.log(err);
      if ((err as any).response?.data?.message) {
        return customSwalAlert({
          icon: 'error',
          title: 'Error al crear la publicación',
          props: { text: 'Ingresa al menos una imagen' },
        });
      }
      customSwalAlert({
        icon: 'error',
        title: 'Error al crear la publicación',
      });
    }
  };
  const handleClick = () => {
    step ? router.back() : setStep(true);
  };
  const nextStep = handleSubmit((data) => {
    const fieldNames: FormValues = {
      title: 'Titulo de publicación',
      publication_type_id: 'Tipo',
      tags: 'Categoría',
      description: '¿Por qué lo recomiendas?',
      reference_link: 'Link de referencia',
    };
    // validate forms
    const errors = [];
    for (const field in data) {
      const valueField = data[field as keyof FormValues];
      if (['reference_link'].includes(field)) continue;
      if (!valueField) errors.push(fieldNames[field as keyof FormValues]);
    }
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
                      {...register('title')}
                    />
                  </label>
                </div>
                <div className="md:flex md:justify-between mb-7">
                  <div className="p-4 border border-custom rgba(125, 125, 125, 1) rounded-xl md:w-[280px] mb-7">
                    <select
                      id="type"
                      {...register('publication_type_id')}
                      defaultValue={watch('publication_type_id')}
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
                          value={category.id}
                          className="text-app-text_form font-normal"
                        >
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="p-4 border border-custom rgba(125, 125, 125, 1) rounded-xl md:w-[280px] mb-7">
                    <label className="flex flex-col gap-1">
                      <select
                        id="category"
                        {...register('tags')}
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
                            value={tag.id}
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
                    {...register('description')}
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
                    {...register('reference_link')}
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
                  <input
                    type="file"
                    id="firstPicture"
                    className="hidden"
                    onChange={handleChange}
                    ref={inputElement}
                    accept="image/*"
                    multiple
                  />
                  {imageSrc.map((image, idx) => (
                    <ImageField
                      key={idx}
                      imgSrc={image}
                      idx={idx}
                      inputElement={inputElement}
                      setImageSrc={setImageSrc}
                      setImages={setImages}
                      imageSrc={imageSrc}
                      images={images}
                    />
                  ))}
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
