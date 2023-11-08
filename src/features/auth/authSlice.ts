import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { UserData } from './types';

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null },
    reducers: {
        setCredentials: (state, action) => {
            console.log(action);
            const { user } = action.payload;
            state.user = user;
        },
        // removed action from prop
        logOut: (state) => {
            state.user = null;
        },
    },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState): UserData | null =>
    state.auth.user;
