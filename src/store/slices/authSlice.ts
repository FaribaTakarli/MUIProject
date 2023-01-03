import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface AuthState {
  isLogin: boolean;
}

// Define the initial state using that type
const initialState: AuthState = {
  isLogin: false,
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true
    },
    logOut: (state) => {
      state.isLogin = false
    },
  },
})

export const { login, logOut } = authSlice.actions

export default authSlice.reducer