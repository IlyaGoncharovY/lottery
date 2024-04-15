import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type numberType = {
    id: number,
    value: number,
    isCheck: boolean
}

interface initialStateType {
    selectedNumbers: numberType[]
}

const initialState: initialStateType = {
  selectedNumbers: [],
};

const footerReducer = createSlice({
  name: 'footerSlice',
  initialState,
  reducers: {
    addSelectedNumber: (state, action:PayloadAction<numberType[]>) => {
      state.selectedNumbers = action.payload;
    },
  },
});
export const {addSelectedNumber} = footerReducer.actions;

export default footerReducer.reducer;
