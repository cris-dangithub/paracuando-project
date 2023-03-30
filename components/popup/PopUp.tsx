import FormAuthCard from '../formAuth/FormAuthCard';

interface IPopUp {
  setPopUpShowed: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopUp: React.FC<IPopUp> = ({ setPopUpShowed }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center p-2">
      <FormAuthCard
        type="loginPopUp"
        title="Hola!"
        subtitle="Bienvenido"
        setPopUpShowed={setPopUpShowed}
      />
    </div>
  );
};

export default PopUp;
