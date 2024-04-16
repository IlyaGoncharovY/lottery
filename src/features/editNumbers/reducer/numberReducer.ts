import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {numberForApp} from '../../../common';

export type numberType = {
    id: number,
    value: number,
    isCheck: boolean
}

interface initialStateType {
    numbersArr: numberType[]
    pressedCount: number
    pressSecondCount: number
}

const initialState: initialStateType = {
  numbersArr: [
    {id: 1, value: 1, isCheck: false},
    {id: 2, value: 2, isCheck: false},
    {id: 3, value: 3, isCheck: false},
    {id: 4, value: 4, isCheck: false},
    {id: 5, value: 5, isCheck: false},
    {id: 6, value: 6, isCheck: false},
    {id: 7, value: 7, isCheck: false},
    {id: 8, value: 8, isCheck: false},
    {id: 9, value: 9, isCheck: false},
    {id: 10, value: 10, isCheck: false},
    {id: 11, value: 11, isCheck: false},
    {id: 12, value: 12, isCheck: false},
    {id: 13, value: 13, isCheck: false},
    {id: 14, value: 14, isCheck: false},
    {id: 15, value: 15, isCheck: false},
    {id: 16, value: 16, isCheck: false},
    {id: 17, value: 17, isCheck: false},
    {id: 18, value: 18, isCheck: false},
    {id: 19, value: 19, isCheck: false},
    {id: 20, value: 1, isCheck: false},
    {id: 21, value: 2, isCheck: false},
  ],
  pressedCount: 0,
  pressSecondCount: 0,
};

const numberReducer = createSlice({
  name: 'numbersSlice',
  initialState,
  reducers: {
    isCheckNumber: (state, action: PayloadAction<number>) => {
      const numberToUpdate = state.numbersArr.find(number => number.id === action.payload);
      if (numberToUpdate) {
        if (state.pressedCount < numberForApp.pressedFirsCount || numberToUpdate.isCheck) {
          if (numberToUpdate.id <= 19) {
            numberToUpdate.isCheck = !numberToUpdate.isCheck;
            state.pressedCount += numberToUpdate.isCheck ? 1 : -1;
          } else if (state.pressSecondCount < numberForApp.pressSecondCount || numberToUpdate.isCheck) {
            numberToUpdate.isCheck = !numberToUpdate.isCheck;
            state.pressSecondCount += numberToUpdate.isCheck ? 1 : -1;
          }
        }
      }
    },
    skipIsCheckProperty: (state) => {
      state.numbersArr.map(el=> el.isCheck = false);
      state.pressedCount = 0;
      state.pressSecondCount = 0;
    },
    changeNumbersValue: (state) => {
      state.numbersArr.forEach((number) => {
        number.value = Math.floor(Math.random() * 100);
      });
    },
  },
});
export const {
  isCheckNumber,
  skipIsCheckProperty,
  changeNumbersValue,
} = numberReducer.actions;

export default numberReducer.reducer;
