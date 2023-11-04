import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../index';

// Define the initial state using that type
const storedLanguage = localStorage.getItem('lang') || '';

const initialState: string = storedLanguage ? JSON.parse(storedLanguage) : 'ar';

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeStateLanguage: (state, action: PayloadAction<string>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { changeStateLanguage } = languageSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLanguage = (state: RootState) => state.language;

const languageReducer = languageSlice.reducer;
export default languageReducer;
