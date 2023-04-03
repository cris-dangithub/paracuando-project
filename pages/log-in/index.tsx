import FormAuthCard from '../../components/formAuth/FormAuthCard';
import AuthLayout from '../../components/layout/AuthLayout';
import { NextPageWithLayout } from '../page';

/* export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies.token;
  try {
    const { data } = await axios.get(`${BASE_URL}/auth/me`, getConfig(token));
    return { redirect: { destination: '/', permanent: false } };
  } catch (error) {
    return { props: { dataServerError: JSON.stringify(error) } };
  }
}; */

const LogInPage: NextPageWithLayout = (/* { dataServerError } */) => {
  // if (dataServerError) console.log(dataServerError);

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
