// import type { PayloadAction } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';
// import type { RootState } from '../index';

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IAuth } from "../../services/api/auth";
import { setTokenValue } from "../../utils";

interface IInitialState {
  user: IAuth | null;
}
const initialState: IInitialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IAuth | null>) => {
      const data = action.payload;
      if (data) {
        setTokenValue(data.accessToken);
      }
      state.user = data;
    },
  },
});

export const { setUser } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;

const authReducer = authSlice.reducer;
export default authReducer;
