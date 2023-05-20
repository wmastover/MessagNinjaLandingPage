// authSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    }
  }
})

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
