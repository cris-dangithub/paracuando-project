import { useEffect } from 'react';
import { useAppDispatch } from './store/hooks';
import { getGlobalUser } from './store/slices/user.slices';

const Init = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getGlobalUser());
  }, []);
  return <></>;
};

export default Init;
