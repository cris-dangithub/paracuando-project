import { useEffect } from 'react';
import { useAppDispatch } from '../lib/store/hooks';
import { getGlobalUser } from '../lib/store/slices/user.slices';

const Init = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getGlobalUser());
  }, []);
  return <></>;
};

export default Init;
