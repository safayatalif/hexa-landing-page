import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { persistConfig, rootReducer } from '../../src/persistConfig';
import { apiSlice } from './apiSlice';

export type RootState = ReturnType<typeof store.getState>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Specify the Redux Persist actions that should be ignored in the serializable check
const ignoredPersistActions = ['persist/PERSIST', 'persist/REHYDRATE'];

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ignoredPersistActions,
            },
        }).concat(apiSlice.middleware),
    devTools: true, // change for prod
});

export const persistor = persistStore(store);
