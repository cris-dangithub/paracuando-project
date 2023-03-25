import FormAuthCard from '../../components/formAuth/FormAuthCard';
import AuthLayout from '../../components/layout/AuthLayout';
import { NextPageWithLayout } from '../page';

const LogInPage: NextPageWithLayout = () => {
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
