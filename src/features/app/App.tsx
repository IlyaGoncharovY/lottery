import {NumbersComponent} from '../editNumbers';
import {FooterComponent} from '../footer';
import {Header} from '../header';

import s from './App.module.css';

export const App = () => {

  return (
    <div className={s.appContainer}>
      <div className={s.lotteryContainer}>
        <Header/>
        <NumbersComponent/>
        <FooterComponent/>
      </div>
    </div>
  );
};
