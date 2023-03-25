import { useRouter } from 'next/router';
import CircleXForm from '../assets/svg/CircleXForm';
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';

interface IFormAuth {
  title: string;
  subtitle: string;
  type: 'login' | 'signup';
}

const FormAuthCard: React.FC<IFormAuth> = ({ title, subtitle, type }) => {
  const router = useRouter();

  const generateForm = () => {
    if (type === 'login') return <LogInForm />;
    if (type === 'signup') return <SignUpForm />;
  };

  return (
    <div className="bg-black/70 text-app-grayLighter w-full max-w-xl px-10 py-14 relative rounded-3xl border border-app-gray">
      <button
        className="absolute top-4 right-4"
        onClick={() => router.push('/')}
      >
        <CircleXForm />
      </button>
      <h2 className="text-3xl font-semibold">{title}</h2>
      <h3 className="text-sm mt-3">{subtitle}</h3>
      {generateForm()}
    </div>
  );
};

export default FormAuthCard;
