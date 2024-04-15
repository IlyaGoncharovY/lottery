import {useAppSelector} from '../../store';

import s from './Footer.module.css';

export const FooterComponent = () => {
  const selectedNumbers = useAppSelector(state =>
    state.selectedNumbers.selectedNumbers);

  const buttonDisabled = selectedNumbers.length === 9;

  return (
    <div className={s.footerContainer}>
      <button
        className={s.button}
        disabled={!buttonDisabled}
      >
          Показать результат
      </button>
    </div>
  );
};
