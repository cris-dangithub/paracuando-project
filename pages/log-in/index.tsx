import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import FormAuthCard from '../../components/formAuth/FormAuthCard';
import AuthLayout from '../../components/layout/AuthLayout';
import { getConfig } from '../../lib/helpers/getConfig';
import { BASE_URL } from '../../lib/services/BASE_URL';
import { useAppSelector } from '../../lib/store/hooks';
import { NextPageWithLayout } from '../page';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies.token;
  try {
    const { data } = await axios.get(`${BASE_URL}/auth/me`, getConfig(token));
    return { redirect: { destination: '/', permanent: false } };
  } catch (error) {
    return { props: { dataServerError: JSON.stringify(error) } };
  }
};

const LogInPage: NextPageWithLayout = ({ dataServerError }) => {
  if (dataServerError) console.log(dataServerError);
  const router = useRouter();
  const { user } = useAppSelector((state) => state);

  // If user exists, redirect to home
  /* if (user) {
    router.push('/');
  } */
  /* const fetcher = async () => {
    try {
      const res = await fetch(`${BASE_URL}/auth/me`, getConfig());
      const data = await res.json();
      console.log(data);
    } catch (error) {}
  };
  fetcher(); */

  return (
    <>
      <FormAuthCard
        title="¡Hola!"
        subtitle="Inicie sesión con los datos que ingresó durante su registro."
        type="login"
      />
    </>
  );
};

export default LogInPage;

LogInPage.getLayout = (page) => {
  return <AuthLayout>{page}</AuthLayout>;
};
