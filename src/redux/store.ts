// store.ts

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import tokenReducer from './tokenSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    token: tokenReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
