import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { apiSlice } from './app/apiSlice';
import authReducer from './features/auth/authSlice';

export const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'], // Specify the reducers you want to persist
};

export const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
});
