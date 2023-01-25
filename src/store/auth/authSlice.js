import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status:'not-autenticated',//checking, not-autenticated, autentited
  uid:null,
  email:null,
  displayName:null,
  photoUrl:null,
  errorMessage:null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state,action) => {

    },
    logout: (state,action) => {

    },
    checkingCredentials: (state) => {
        state.status='checking'
    },
  },
})

export const { login,logout,checkingCredentials } = authSlice.actions;
