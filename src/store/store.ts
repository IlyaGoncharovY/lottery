import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';

import {numberReducer} from '../features/editNumbers';
import {footerReducer} from '../features/footer';

export const store = configureStore({
  reducer: {
    numbersToChoose: numberReducer,
    selectedNumbers: footerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
