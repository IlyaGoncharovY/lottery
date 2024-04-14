import {FC} from 'react';

import {useAppDispatch, useAppSelector} from '../../../../store';
import {checkFirstNumber, numberType} from '../../reducer/numberReducer.ts';

import s from './FirstNumbersItem.module.css';

interface IFirstNumbersItem {
    firstNumber: numberType
}

export const FirstNumbersItem:FC<IFirstNumbersItem> = ({firstNumber}) => {

  const pressCount = useAppSelector(state =>
    state.numbersToChoose.pressedCount);

  const dispatch = useAppDispatch();

  const isCheckNumberHandler = (index: number) => {
    if (pressCount < 8 || firstNumber.isCheck) {
      dispatch(checkFirstNumber(index));
    }
  };

  return (
    <div>
      <button
        className={firstNumber.isCheck ? s.active : s.buttonContainer}
        onClick={() => isCheckNumberHandler(firstNumber.id)}
        disabled={pressCount === 8 && !firstNumber.isCheck}
      >
        {firstNumber.value}
      </button>
    </div>
  );
};
