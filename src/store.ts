import { configureStore, type Action, type ThunkAction } from '@reduxjs/toolkit';
// import { api } from '../services/auth';
import api from './services/apiSlice';
import urlHistoryReducer from './services/urlHistorySlice'
import { useSelector, type TypedUseSelectorHook } from 'react-redux';
// import { TypedUseSelectorHook, useSelector } from 'react-redux';


export const store = configureStore({
  reducer: {
    urlHistory: urlHistoryReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    //myModelApi.middleware,
    api.middleware,
    ),
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;