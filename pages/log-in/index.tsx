import { useRouter } from 'next/router';
import FormAuthCard from '../../components/formAuth/FormAuthCard';
import AuthLayout from '../../components/layout/AuthLayout';
import { useAppSelector } from '../../lib/store/hooks';
import { NextPageWithLayout } from '../page';

const LogInPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { user } = useAppSelector((state) => state);

  // If user exists, redirect to home
  //if (user) {
  //  router.push('/');
  //}
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
