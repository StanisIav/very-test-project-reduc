import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from './reducers/UserSlice';
import { postAPI } from '../services/PostServices'

const rootReducer = combineReducers({
    [postAPI.reducerPath] : postAPI.reducer,
    UserReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(postAPI.middleware),
    });

}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

