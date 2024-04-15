import img from '../../assets/img/magic-wand.png';

import s from './Header.module.css';

export const Header = () => {
  return (
    <div className={s.headerContainer}>
      <div>Билет 1</div>
      <img src={img} alt="magic"/>
    </div>
  );
};
