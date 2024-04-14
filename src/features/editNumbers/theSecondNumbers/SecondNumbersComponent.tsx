import {useAppSelector} from '../../../store';

import s from './SecondNumbers.module.css';

import {SecondNumberItem} from './item/SecondNumberItem.tsx';

export const SecondNumbersComponent = () => {

  const secondNumbers = useAppSelector(state =>
    state.numbersToChoose.secondNumbers);

  return (
    <div className={s.numbersComponentContainer}>
      <div className={s.descriptionContainer}>
        <div className={s.title}>Поле 2</div>
        <div className={s.description}>Отметьте 1 число.</div>
      </div>
      <div className={s.numbersContainer}>
        {secondNumbers.map((secondNumber) =>
          <SecondNumberItem
            key={secondNumber.id}
            secondNumber={secondNumber}
          />)}
      </div>
    </div>
  );
};
