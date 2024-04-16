import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type numberType = {
    id: number,
    value: number,
    isCheck: boolean
}

interface initialStateType {
    selectedNumbers: numberType[]
    isWon: boolean
}

const initialState: initialStateType = {
  selectedNumbers: [],
  isWon: false,
};

const footerReducer = createSlice({
  name: 'footerSlice',
  initialState,
  reducers: {
    addSelectedNumber: (state, action:PayloadAction<numberType[]>) => {
      state.selectedNumbers = action.payload;
    },
    clearSelectedNumbersArray: (state) => {
      state.selectedNumbers = [];
    },
    isWonLottery: (state, action: PayloadAction<boolean>) => {
      state.isWon = action.payload;
    },
  },
});
export const {
  addSelectedNumber,
  clearSelectedNumbersArray,
  isWonLottery,
} = footerReducer.actions;

export default footerReducer.reducer;
