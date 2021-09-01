import { createReducer } from '@reduxjs/toolkit';
import * as types from './types';

const initialState = {
  isLoading: false,
  isDarkMode: false,
  isTerminalActive: false,
};

// Redux Toolkit is using immer.js
// therefore, can mutate state
// no need to return
// return only on a state reset or a replace

export const appReducer = createReducer(initialState, {
  [types.SET_APP_LOADING]: (state, action) => {
    state.isLoading = action.payload;
  },
  [types.SET_DARK_MODE_STATUS]: (state, action) => {
    state.isDarkMode = action.payload;
  },
  [types.TOGGLE_TERMINAL]: (state, action) => {
    state.isTerminalActive = !state.isTerminalActive;
  },
});
