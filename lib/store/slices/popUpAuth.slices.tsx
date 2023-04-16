import { createSlice } from '@reduxjs/toolkit';

interface IPopUp {
  isActive: boolean;
  type: 'loginPopUp' | 'signUpPopUp' | 'chooseOption';
}

const initialState: IPopUp = {
  isActive: false,
  type: 'chooseOption',
};

const popUpAuthSlice = createSlice({
  name: 'popUpAuth',
  initialState,
  reducers: {
    toggleVisibility: (state) => {
      state.isActive = !state.isActive;
      if (state.type !== 'chooseOption') state.type = 'chooseOption';
    },
    goToCreateAccount: (state) => {
      state.type = 'signUpPopUp';
    },
    goToLoginAccount: (state) => {
      state.type = 'loginPopUp';
    },
  },
});

export const { toggleVisibility, goToCreateAccount, goToLoginAccount } =
  popUpAuthSlice.actions;

export default popUpAuthSlice.reducer;
