import React from 'react';

import css from './SearchBox.module.css';

interface Props {
  defaultValue: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBox({ defaultValue, onSearch }: Props) {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      defaultValue={defaultValue}
      onChange={onSearch}
    />
  );
}
