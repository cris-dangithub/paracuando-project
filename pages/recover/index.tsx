import FormAuthCard from '../../components/formAuth/FormAuthCard';
import AuthLayout from '../../components/layout/AuthLayout';
import { NextPageWithLayout } from '../page';

const RecoverPage: NextPageWithLayout = () => {
  return (
    <>
      <FormAuthCard
        title="Encontremos tu cuenta"
        subtitle="Para restablecer tu contraseña, escribe la dirección de correo electrónico que puedes haber utilizado con Para cuándo?"
        type="recover"
      />
    </>
  );
};

export default RecoverPage;

RecoverPage.getLayout = (page) => {
  return <AuthLayout noLogo>{page}</AuthLayout>;
};
