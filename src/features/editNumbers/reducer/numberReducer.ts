import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type numberType = {
    id: number,
    value: number,
    isCheck: boolean
}

interface initialStateType {
    firstNumbers: numberType[]
    secondNumbers: numberType[]
    pressedCount: number
    pressSecondCount: number
}

const initialState: initialStateType = {
  firstNumbers: [
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
  ],
  secondNumbers: [
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
    checkFirstNumber: (state, action: PayloadAction<number>) => {
      const numberToUpdate = state.firstNumbers.find(number => number.id === action.payload);
      if (numberToUpdate) {
        if (state.pressedCount < 8 || numberToUpdate.isCheck) {
          numberToUpdate.isCheck = !numberToUpdate.isCheck;
          state.pressedCount += numberToUpdate.isCheck ? 1 : -1;
        }
      }
    },
    checkSecondNumber: (state, action: PayloadAction<number>) => {
      const numberToUpdate = state.secondNumbers.find(number => number.id === action.payload);
      if (numberToUpdate) {
        if (state.pressSecondCount < 1 || numberToUpdate.isCheck) {
          numberToUpdate.isCheck = !numberToUpdate.isCheck;
          state.pressSecondCount += numberToUpdate.isCheck ? 1 : -1;
        }
      }
    },
  },
});
export const {checkFirstNumber, checkSecondNumber} = numberReducer.actions;

export default numberReducer.reducer;
