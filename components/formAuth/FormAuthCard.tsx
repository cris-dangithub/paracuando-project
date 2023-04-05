import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../../lib/store/hooks';
import { toggleVisibility } from '../../lib/store/slices/popUpAuth.slices';
import CircleXForm from '../assets/svg/CircleXForm';
import ChooseOptionForm from '../popup/ChooseOptionForm';
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';

type AuthType =
  | 'login'
  | 'loginPopUp'
  | 'signup'
  | 'signUpPopUp'
  | 'chooseOption';

interface IFormAuth {
  title: string;
  subtitle: string;
  type: AuthType;
}

interface IGenerateForm {
  type: AuthType;
}

const GenerateForm: React.FC<IGenerateForm> = ({ type }) => {
  if (type === 'login') return <LogInForm />;
  if (type === 'loginPopUp') return <LogInForm type="loginPopUp" />;
  if (type === 'signup') return <SignUpForm />;
  if (type === 'signUpPopUp') return <SignUpForm type="signUpPopUp" />;
  if (type === 'chooseOption') return <ChooseOptionForm />;
  return <></>;
};

const FormAuthCard: React.FC<IFormAuth> = ({ title, subtitle, type }) => {
  const router = useRouter();
  const { popUpAuth } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (type === 'login' || type === 'signup') router.push('/');
    if (['loginPopUp', 'signUpPopUp', 'chooseOption'].includes(type)) {
      const newPopUpAuth = { ...popUpAuth };
      newPopUpAuth.isActive = false;
      dispatch(toggleVisibility());
    }
  };

  const maxWidthCard = () => {
    if (['loginPopUp', 'signUpPopUp', 'chooseOption'].includes(type))
      return '!max-w-sm backdrop-blur-sm';
    return '';
  };

  const paddingCard = () => {
    return type === 'chooseOption' ? 'py-40' : 'py-14';
  };

  return (
    <div
      className={`bg-black/70 text-app-grayLighter w-full max-w-xl px-10 relative rounded-3xl border border-app-gray ${maxWidthCard()} ${paddingCard()}`}
      onClick={(e) => e.stopPropagation()}
    >
      <button className="absolute top-4 right-4" onClick={handleClick}>
        <CircleXForm />
      </button>
      <h2 className="text-3xl font-semibold">{title}</h2>
      <h3 className="text-sm mt-3">{subtitle}</h3>
      <GenerateForm type={type} />
    </div>
  );
};

export default FormAuthCard;
