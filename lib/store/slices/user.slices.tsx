import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '..';
import getConfig from '../../helpers/getConfig';
import { getUser } from '../../services/auth.service';

const userSlice = createSlice({
  name: 'popUpAuth',
  initialState: null,
  reducers: {
    setUserGlobal: (state, action: PayloadAction) => action.payload,
  },
});

export const { setUserGlobal } = userSlice.actions;

export default userSlice.reducer;

export const getGlobalUser = () => (dispatch: AppDispatch) => {
  getUser(getConfig())
    .then(({ data }) => dispatch(setUserGlobal(data.results)))
    .catch((err) => console.log(err));
};
