import img from '../../assets/img/magic-wand.png';

import {useAppDispatch} from '../../store';
import {changeNumbersValue} from '../editNumbers/reducer/numberReducer.ts';

import s from './Header.module.css';

export const Header = () => {

  const dispatch = useAppDispatch();

  const handleImgClick = () => {
    dispatch(changeNumbersValue());
  };

  return (
    <div className={s.headerContainer}>
      <div>Билет 1</div>
      <img src={img} alt="magic" onClick={handleImgClick}/>
    </div>
  );
};
