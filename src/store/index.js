import {configureStore} from '@reduxjs/toolkit';
import {toysReducer} from './toys.slice';

export const store = configureStore({
  reducer: {
    toys: toysReducer,
  },
});
