import {FC} from 'react';

import {isCheckNumber, numberType} from '../../features/editNumbers/reducer/numberReducer.ts';
import {useAppDispatch} from '../../store';

import s from './CommonItem.module.css';

interface ICommonItem {
    numberEl: numberType
    pressCount: number
    countLength: number
}

export const CommonItem: FC<ICommonItem> = ({
  numberEl,
  pressCount,
  countLength,
}) => {

  const dispatch = useAppDispatch();

  const isCheckNumberHandler = (id: number) => {
    if (pressCount < countLength || numberEl.isCheck) {
      dispatch(isCheckNumber(id));
    }
  };

  return (
    <div>
      <button
        className={numberEl.isCheck ? s.active : s.buttonContainer}
        onClick={() => isCheckNumberHandler(numberEl.id)}
        disabled={pressCount === countLength && !numberEl.isCheck}
      >
        {numberEl.value}
      </button>
    </div>
  );
};
