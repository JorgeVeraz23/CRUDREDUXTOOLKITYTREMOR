import {configureStore } from '@reduxjs/toolkit'
// import usersReducer from './users/slice'
import UsersReducer from './users/slice.tsx'

const persistanteLocalStorageMiddleware = (store) => (next) => (action) => {
    console.log(store.getState())
    console.log(action)
    next(action)
    localStorage.setItem("__redux_state__", JSON.stringify(store.getState()));
}

export const store = configureStore({
    reducer: {
        users: UsersReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistanteLocalStorageMiddleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch