import FormAuthCard from '../../components/formAuth/FormAuthCard';
import AuthLayout from '../../components/layout/AuthLayout';
import { NextPageWithLayout } from '../page';

const SignUpPage: NextPageWithLayout = () => {
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
