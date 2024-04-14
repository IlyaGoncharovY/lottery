import {FC} from 'react';

import {checkSecondNumber, numberType} from '../../reducer/numberReducer.ts';
import {useAppDispatch, useAppSelector} from '../../../../store';

import s from './SecondNumbersItem.module.css';

interface ISecondNumberItem {
    secondNumber: numberType
}

export const SecondNumberItem:FC<ISecondNumberItem> = ({secondNumber}) => {

  const pressSecondCount = useAppSelector(state =>
    state.numbersToChoose.pressSecondCount);

  const dispatch = useAppDispatch();

  const isCheckNumberHandler = (index: number) => {
    if (pressSecondCount < 1 || secondNumber.isCheck) {
      dispatch(checkSecondNumber(index));
    }
  };

  return (
    <div>
      <button
        className={secondNumber.isCheck ? s.active : s.buttonContainer}
        onClick={() => isCheckNumberHandler(secondNumber.id)}
        disabled={pressSecondCount === 1 && !secondNumber.isCheck}
      >
        {secondNumber.value}
      </button>
    </div>
  );
};
