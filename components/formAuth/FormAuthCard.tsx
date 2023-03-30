import { useRouter } from 'next/router';
import CircleXForm from '../assets/svg/CircleXForm';
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';

type AuthType = 'login' | 'signup' | 'loginPopUp';

interface IFormAuth {
  title: string;
  subtitle: string;
  type: AuthType;
  setPopUpShowed?: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormAuthCard: React.FC<IFormAuth> = ({
  title,
  subtitle,
  type,
  setPopUpShowed,
}) => {
  const router = useRouter();

  const generateForm = () => {
    if (type === 'login') return <LogInForm />;
    if (type === 'loginPopUp') return <LogInForm />;
    if (type === 'signup') return <SignUpForm />;
  };

  const handleClick = () => {
    if (type === 'login' || type === 'signup') () => router.push('/');
    if (type === 'loginPopUp') setPopUpShowed?.(false);
  };

  return (
    <div className="bg-black/70 text-app-grayLighter w-full max-w-xl px-10 py-14 relative rounded-3xl border border-app-gray">
      <button className="absolute top-4 right-4" onClick={handleClick}>
        <CircleXForm />
      </button>
      <h2 className="text-3xl font-semibold">{title}</h2>
      <h3 className="text-sm mt-3">{subtitle}</h3>
      {generateForm()}
    </div>
  );
};

export default FormAuthCard;
