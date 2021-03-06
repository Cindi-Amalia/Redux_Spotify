import { createSlice } from '@reduxjs/toolkit';

 export const authSlice = createSlice({
   name: 'auth',
   initialState: {
     accessToken: '',
     isAuthorize: false,
     user: {},
   },
   reducers: {
     login: (state, action) => {
       state.accessToken = action.payload.accessToken;
       state.isAuthorize = true;
       state.user = action.payload.user;
     }
   }
 });

 export const { login } = authSlice.actions;

 export default authSlice.reducer;