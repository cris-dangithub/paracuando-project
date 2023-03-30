import { useAppDispatch, useAppSelector } from '../../lib/store/hooks';
import { toggleVisibility } from '../../lib/store/slices/popUpAuth.slices';
import FormAuthCard from '../formAuth/FormAuthCard';

const PopUp = () => {
  const dispatch = useAppDispatch();
  const { popUpAuth } = useAppSelector((state) => state);
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center p-3 bg-black/40 md:items-start md:justify-end md:pt-24 md:pr-11 "
      onClick={() => dispatch(toggleVisibility())}
    >
      {popUpAuth.type === 'loginPopUp' && (
        <FormAuthCard
          type={popUpAuth.type}
          title="Hola!"
          subtitle="Inicie sesión con los datos que ingresó durante su registro."
        />
      )}
      {popUpAuth.type === 'signUpPopUp' && (
        <FormAuthCard
          type={popUpAuth.type}
          title="Todos votamos :)"
          subtitle="Regístrate para ingresar"
        />
      )}
      {popUpAuth.type === 'chooseOption' && (
        <FormAuthCard
          title="Todos votamos :)"
          subtitle="Todos los votos son importantes aquí. Para validar el tuyo debes tener una cuenta."
          type="chooseOption"
        />
      )}
    </div>
  );
};

export default PopUp;
