import s from './Footer.module.css';

export const FooterComponent = () => {
  return (
    <div className={s.footerContainer}>
      <button className={s.button}>
          Показать результат
      </button>
    </div>
  );
};
