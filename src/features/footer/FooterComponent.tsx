import {useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from '../../store';
import {skipIsCheckProperty} from '../editNumbers/reducer/numberReducer.ts';

import s from './Footer.module.css';

export const FooterComponent = () => {
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);

  const selectedNumbers = useAppSelector(state =>
    state.selectedNumbers.selectedNumbers);

  const dispatch = useAppDispatch();

  const generateRandomNumbers = () => {
    const randomNumbersSet = new Set<number>();
    while (randomNumbersSet.size < 21) {
      randomNumbersSet.add(Math.floor(Math.random() * 90) + 1);
    }
    const randomNumbersArray = Array.from(randomNumbersSet);
    setRandomNumbers(randomNumbersArray);
  };

  useEffect(() => {
    generateRandomNumbers();
  }, []);

  const handleShowResult = () => {
    const matchingNumbers = selectedNumbers.filter(num => randomNumbers.includes(num.value));
    console.log(matchingNumbers);
    if (matchingNumbers.length >= 4) {
      console.log('Win!');
    } else {
      console.log('Lose!');
    }

    dispatch(skipIsCheckProperty());

    generateRandomNumbers();
  };

  console.log(randomNumbers);
  const buttonDisabled = selectedNumbers.length === 9;

  return (
    <div className={s.footerContainer}>
      <button
        className={s.button}
        disabled={!buttonDisabled}
        onClick={handleShowResult}
      >
          Показать результат
      </button>
    </div>
  );
};
