import {Header} from '../header';
import {FooterComponent} from '../footer';
import {NumbersComponent} from '../editNumbers';

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
