import { createAction } from '@reduxjs/toolkit';
import * as types from './types';

export const setAppLoading = createAction(types.SET_APP_LOADING);