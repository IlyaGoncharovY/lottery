import {useAppSelector} from '../../../store';

import {FirstNumbersItem} from './item/FirstNumbersItem.tsx';

import s from './FirstNumbers.module.css';

export const FirstNumbersComponent = () => {

  const firstNumbers = useAppSelector(state =>
    state.numbersToChoose.firstNumbers);

  return (
    <div className={s.numbersComponentContainer}>
      <div className={s.descriptionContainer}>
        <div className={s.title}>Поле 1</div>
        <div className={s.description}>Отметьте 8 чисел.</div>
      </div>
      <div className={s.numbersContainer}>
        {firstNumbers.map((firstNumber) =>
          <FirstNumbersItem
            key={firstNumber.id}
            firstNumber={firstNumber}
          />)}
      </div>
    </div>
  );
};
