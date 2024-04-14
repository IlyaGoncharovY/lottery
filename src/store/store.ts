import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';

import {numberReducer} from '../features/editNumbers';

export const store = configureStore({
  reducer: {
    numbersToChoose: numberReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
