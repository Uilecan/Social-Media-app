import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage, { persistReducer, persistStore } from 'redux-persist';
import { authReducer } from './slices/authSlice';

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    auth: authReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export const persistor = persistStore(store)