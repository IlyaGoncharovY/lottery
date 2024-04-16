import {Action, combineReducers, configureStore, ThunkAction} from '@reduxjs/toolkit';

import {numberReducer} from '../features/editNumbers';
import {footerReducer} from '../features/footer';
import {apiSlice} from '../features/footer/api/apiSlice.ts';

const rootReducer = combineReducers({
  numbersToChoose: numberReducer,
  selectedNumbers: footerReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({}).concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
