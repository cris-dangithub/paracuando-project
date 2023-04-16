import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '..';
import { getConfig } from '../../helpers/getConfig';
import { getUser } from '../../services/auth.service';

interface User {
  email: string;
  first_name: string;
  id: string;
  image_url: string;
  last_name: string;
  profiles: Array<any>;
  username: string;
}

const initialState = null as User | null;

const userSlice = createSlice({
  name: 'popUpAuth',
  initialState,
  reducers: {
    setUserGlobal: (state, action: PayloadAction<User | null>) =>
      action.payload,
  },
});

export const { setUserGlobal } = userSlice.actions;

export default userSlice.reducer;

export const getGlobalUser = () => (dispatch: AppDispatch) => {
  getUser(getConfig())
    .then(({ data }) => dispatch(setUserGlobal(data.results)))
    .catch((err) => dispatch(setUserGlobal(null)));
};
