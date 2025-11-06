'use client';

import { Note } from '@/types/note';

import css from './NoteList.module.css';

interface Props {
  data: Note[];
}

export default function NoteList({ data }: Props) {
  return (
    <ul className={css.list}>
      {data?.map((note: Note) => (
        <li key={note.id} className={css.listItem}>
          <h2 className={css.title}>{note.title}</h2>
          <p className={css.content}>{note.content}</p>
          <div className={css.footer}>
            <span className={css.tag}>{note.tag}</span>
            {/* додати посилання View details*/}
            <button className={css.button}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
