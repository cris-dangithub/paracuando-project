import Link from 'next/link';
import Logo from '../components/assets/logo/Logo';
import { Layout } from '../components/layout/Layout';
import PopUp from '../components/popup/PopUp';
import { EventSlider } from '../components/sliders/EventSlider/EventSlider';
import { eventsMock } from '../lib/data/events.mock';
import { useAppSelector } from '../lib/store/hooks';

import { usePublications } from '../lib/services/publications.services';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const { popUpAuth } = useAppSelector((state) => state);
  console.log(popUpAuth);
  //const { data, error, isLoading } = useCategories();
  const { data, error, isLoading, mutate } = usePublications();
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  console.log({ data, error, isLoading });

  return (
    <div>
      {/* PopUps */}
      {popUpAuth.isActive && <PopUp />}
      {/* HERO SECTION */}
      <div className='min-h-[488px] flex justify-center items-center flex-col bg-[url("/home.png")] bg-cover bg-center app-banner -mt-4 gap-5'>
        <div>
          <Logo />
        </div>
        <div className="flex flex-col gap-4">
          <input
            className="px-6 py-4 rounded-3xl w-full sm:w-[465px]"
            type="text"
            placeholder="¿Qué quieres ver en tu ciudad?"
          />

          <div className="flex items-center justify-center gap-2">
            <Link href={'/category/marcas-y-tiendas'}>
              <button
                className="bg-white text-slate-300 font-size py-2 px-4 rounded-3xl w-full sm:w-137px"
                type="button"
              >
                Marcas y tiendas
              </button>
            </Link>
            <Link href={'/category/artistas-y-conciertos'}>
              <button
                className="bg-white text-slate-300 font-size py-2 px-4 rounded-3xl w-full sm:w-158px"
                type="button"
              >
                Artistas y conciertos
              </button>
            </Link>
            <Link href={'/category/torneos'}>
              <button
                className="bg-white text-slate-300 font-size py-2 px-4 rounded-3xl w-full sm:w-86px"
                type="button"
              >
                Torneos
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* CONTENIDO */}
      <div className=" bg-white flex flex-col mt-4 gap-3">
        <EventSlider
          title={'Populares en Querétaro'}
          subtitle={'Lo que las personas piden más'}
          events={eventsMock}
        />
      </div>
      {/* SUGGESTION */}
      <div className=" bg-white flex flex-col mt-4 gap-3">
        <EventSlider
          title={'Sugerencias para ti'}
          subtitle={' Publicaciones que podrías colaborar'}
          events={eventsMock}
        />
      </div>
      {/* BUTTONS CUADRO*/}
      <div className="min-h-[250px] bg-slate-100 w-941">
        <div>
          <p className="text-[24px] leading-[28.13px] py-6 px-8 text-base font-Roboto font-medium left-56 w-373px text-app-grayDark">
            ¡Hagamoslo más personal!
          </p>
          <p className="text-[16px] leading-[18.75px] text-base font-Roboto py-1 px-8 font-normal left-56 text-app-grayDark">
            Selecciona tus interes para brindarte sugerencia de acuerdo a tus
            gustos
          </p>
        </div>
        <div className="flex items-center justify-center py-2 mt-4 gap-10">
          <Link href={'/category/marcas-y-tiendas'}>
            <button
              className="bg-white hover:bg-blue text-slate-300 font-size py-2 px-4 rounded-3xl w-full sm:w-465px"
              type="button"
            >
              Restaurantes
            </button>
          </Link>
          <Link href={'/category/marcas-y-tiendas'}>
            <button
              className="bg-white text-slate-300 font-size py-2 px-4 rounded-3xl w-full sm:w-465px"
              type="button"
            >
              Tiendas de ropas
            </button>
          </Link>
          <Link href={'/category/artistas-y-conciertos'}>
            <button
              className="bg-white text-slate-300 font-size py-2 px-4 rounded-3xl w-full sm:w-465px"
              type="button"
            >
              Rock
            </button>
          </Link>
        </div>
        <Link href={'/category/marcas-y-tiendas'}>
          <button className="text-[16px] py-10 px-10 leading-[18.75px] text-base font-Roboto font-normal left-56 text-app-grayDark">
            Ver todos los intereses
          </button>
        </Link>
      </div>
      {/* RECIENTES */}
      <div className=" bg-white flex flex-col mt-4 gap-3">
        <EventSlider
          title={'Recientes'}
          subtitle={'Las personas últimamente están hablando de esto'}
          events={eventsMock}
        />
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
