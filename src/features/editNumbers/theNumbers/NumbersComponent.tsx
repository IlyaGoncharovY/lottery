import {useAppSelector} from '../../../store';

import {CommonItem, WrapperComponent} from '../../../common';

import s from './Numbers.module.css';

export const NumbersComponent = () => {

  const numbersArr = useAppSelector(state =>
    state.numbersToChoose.numbersArr);

  const firstPressCount = useAppSelector(state =>
    state.numbersToChoose.pressedCount);
  const secondPressCount = useAppSelector(state =>
    state.numbersToChoose.pressSecondCount);

  const first = numbersArr.filter(el => el.id <= 19);
  const second = numbersArr.filter(el => el.id >= 20);

  return (
    <div className={s.numbersComponentContainer}>
      <WrapperComponent title={'Поле 1'} description={'Отметьте 8 чисел.'}>
        {first.map((firstNumber) =>
          <CommonItem
            key={firstNumber.id}
            numberEl={firstNumber}
            pressCount={firstPressCount}
            countLength={8}
          />)}
      </WrapperComponent>
      <WrapperComponent title={'Поле 2'} description={'Отметьте 1 число.'}>
        {second.map((secondNumber) =>
          <CommonItem
            key={secondNumber.id}
            numberEl={secondNumber}
            pressCount={secondPressCount}
            countLength={1}
          />)}
      </WrapperComponent>
    </div>
  );
};
