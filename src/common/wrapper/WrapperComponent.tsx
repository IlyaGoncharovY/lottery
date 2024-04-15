import {FC, ReactNode} from 'react';

import s from './Wrapper.module.css';

interface IWrapperComponent {
    title: string
    description: string
    children: ReactNode
}

export const WrapperComponent:FC<IWrapperComponent> = ({
  title,
  description,
  children,
}) => {
  return (
    <>
      <div className={s.descriptionContainer}>
        <div className={s.title}>{title}</div>
        <div className={s.description}>{description}</div>
      </div>
      <div className={s.numbersContainer}>
        {children}
      </div>
    </>
  );
};
