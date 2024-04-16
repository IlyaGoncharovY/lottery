import {useCallback, useState} from 'react';

/**
 * custom hook for generateRandomNumbers
 * @return randomNumbers: number[]
 * @return generateRandomNumbers: () => void
 */
export const useRandomNumbers = () => {
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);

  const generateRandomNumbers = useCallback(() => {
    const randomNumbersSet = new Set<number>();
    while (randomNumbersSet.size < 21) {
      randomNumbersSet.add(Math.floor(Math.random() * 90) + 1);
    }
    const randomNumbersArray = Array.from(randomNumbersSet);
    setRandomNumbers(randomNumbersArray);
  }, []);

  return {
    randomNumbers, generateRandomNumbers,
  };
};


