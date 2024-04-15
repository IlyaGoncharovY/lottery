import {useEffect} from 'react';

import {CommonItem, WrapperComponent} from '../../../common';
import {useAppDispatch, useAppSelector} from '../../../store';
import {addSelectedNumber} from '../../footer/reducer/footerReducer.ts';

import s from './Numbers.module.css';

export const NumbersComponent = () => {

  const {
    pressedCount,
    pressSecondCount,
    numbersArr,
  } = useAppSelector(state =>
    state.numbersToChoose);

  const first = numbersArr.filter(el => el.id <= 19);
  const second = numbersArr.filter(el => el.id >= 20);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addSelectedNumber(numbersArr.filter(numberEl => numberEl.isCheck)));
  }, [numbersArr, dispatch]);

  return (
    <div className={s.numbersComponentContainer}>
      <WrapperComponent title={'Поле 1'} description={'Отметьте 8 чисел.'}>
        {first.map((firstNumber) =>
          <CommonItem
            key={firstNumber.id}
            numberEl={firstNumber}
            pressCount={pressedCount}
            countLength={8}
          />)}
      </WrapperComponent>
      <WrapperComponent title={'Поле 2'} description={'Отметьте 1 число.'}>
        {second.map((secondNumber) =>
          <CommonItem
            key={secondNumber.id}
            numberEl={secondNumber}
            pressCount={pressSecondCount}
            countLength={1}
          />)}
      </WrapperComponent>
    </div>
  );
};
