import {useEffect} from 'react';

import {numberForApp} from '../../common';
import {useAppDispatch, useAppSelector} from '../../store';

import {skipIsCheckProperty} from '../editNumbers/reducer/numberReducer.ts';

import {useRandomNumbers} from './hook/useRandomNumbers.ts';

import s from './Footer.module.css';
import {apiSlice} from './api/apiSlice.ts';
import {clearSelectedNumbersArray, isWonLottery} from './reducer/footerReducer.ts';

export const FooterComponent = () => {
  const {selectedNumbers, isWon } = useAppSelector(state =>
    state.selectedNumbers);

  const [createTicket,
    {
      error: createTicketError,
      isLoading: createTicketLoading,
    },
  ] = apiSlice.useSendResultTicketMutation();

  const {randomNumbers, generateRandomNumbers} = useRandomNumbers();

  const dispatch = useAppDispatch();

  useEffect(() => {
    generateRandomNumbers();
  }, []);

  const handleShowResult = async () => {
    const matchingNumbers = selectedNumbers.filter(num => randomNumbers.includes(num.value));
    const filteredFirstNumbers = selectedNumbers.filter(num => num.id >= 1 && num.id <= 19);
    const filteredSecondNumbers = selectedNumbers.filter(num => num.id >= 20 && num.id <= 21);
    const firstField = filteredFirstNumbers.map(el => el.value);
    const secondField = filteredSecondNumbers.map(el => el.value);
    const isTicketWon = matchingNumbers.length >= numberForApp.matchingNumbersLength;

    if (isTicketWon) {
      dispatch(isWonLottery(true));
    }

    try {
      await createTicket({ firstField, secondField, isTicketWon });
      generateRandomNumbers();
    } catch (error) {
      console.error('Error:', error);
    } finally {
      dispatch(skipIsCheckProperty());
      dispatch(clearSelectedNumbersArray());
    }
  };

  const buttonDisabled = selectedNumbers.length === numberForApp.selectedNumbersLength;

  return (
    <div className={s.footerContainer}>
      <button
        className={s.button}
        disabled={!buttonDisabled || createTicketLoading}
        onClick={handleShowResult}
      >
        {createTicketLoading ? 'Отправка' : 'Показать результат'}
      </button>
      <div>
        {createTicketError && <h1>Ошибка... И скорее всего проигрышь (</h1>}
        {isWon ? <h1>Поздравляю с победой!! загляни в network</h1> : <></>}
      </div>
    </div>
  );
};
