import {configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {authApi} from "./services/auth.service";
import userReducer from './slices/user.slice';
import {ranobeApi} from "./services/ranobe.service";
import { chapterApi } from './services/chapter.service';


export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [ranobeApi.reducerPath]: ranobeApi.reducer,
        [chapterApi.reducerPath]: chapterApi.reducer,
        userState: userReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat([authApi.middleware, ranobeApi.middleware, chapterApi.middleware]);
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
