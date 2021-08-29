import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './AppStore/reducer';

export default configureStore({
  reducer: {
    app: appReducer,
  },
});
