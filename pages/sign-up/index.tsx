import { useRouter } from 'next/router';
import FormAuthCard from '../../components/formAuth/FormAuthCard';
import AuthLayout from '../../components/layout/AuthLayout';
import { useAppSelector } from '../../lib/store/hooks';
import { NextPageWithLayout } from '../page';

const SignUpPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { user } = useAppSelector((state) => state);

  // If user exists, redirect to home
  //if (user) {
  //  router.push('/');
  //}
  return (
    <>
      <FormAuthCard
        title="Todos votamos :)"
        subtitle="Regístrate, valida tu voto."
        type="signup"
      />
    </>
  );
};

export default SignUpPage;

SignUpPage.getLayout = (page) => {
  return <AuthLayout>{page}</AuthLayout>;
};
