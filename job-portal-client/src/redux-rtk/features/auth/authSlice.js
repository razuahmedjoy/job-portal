import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie';

const initialState = {
    accessToken: null,
    user: null,
    isAuthenticated: false,
    _id: null,
    role: null,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        profileLog: (state, action) => {
            state.user = action.payload;
        },
        userLoggedIn: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.isAuthenticated = true;
            state._id = action.payload._id;
            state.user = action.payload.user;
            state.role = action.payload.role;
        },
        userLoggedOut: (state) => {
            state.accessToken = null;
            state.user = null;
            state.isAuthenticated = false;
            state._id = null;
            state.role = null;

            Cookies.remove('accessToken');
            Cookies.remove('_id');
        },
    }
})

export const {
    userLoggedIn,
    userLoggedOut,
    profileLog
} = authSlice.actions;

export default authSlice.reducer;