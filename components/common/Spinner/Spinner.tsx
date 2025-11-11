'use client';

import css from './Spinner.module.css';

export default function Spinner() {
  return (
    <div className={css.wrapper}>
      <div className={css.spinner}></div>
    </div>
  );
}
