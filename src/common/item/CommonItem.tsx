import {FC, memo} from 'react';

import {useAppDispatch} from '../../store';
import {isCheckNumber, numberType} from '../../features/editNumbers/reducer/numberReducer.ts';

import s from './CommonItem.module.css';

interface ICommonItem {
    numberEl: numberType
    pressCount: number
    countLength: number
}

/**
 * component for render item array numbersArr
 * @param numberEl: numberType
 * @param pressCount - number
 * @param countLength - number
 * @constructor
 */
export const CommonItem: FC<ICommonItem> = memo(({
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
});
