import {NumbersComponent} from '../editNumbers';
import {FooterComponent} from '../footer';

import s from './App.module.css';

export const App = () => {

  return (
    <div className={s.appContainer}>
      <div className={s.lotteryContainer}>
        <NumbersComponent/>
        <FooterComponent/>
      </div>
    </div>
  );
};
