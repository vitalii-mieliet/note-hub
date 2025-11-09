'use client';

import Link from 'next/link';

import { useNoteMutations } from '@/hooks/useNoteMutations';
import { Note } from '@/schemas/note';

import css from './NoteList.module.css';

interface Props {
  data: Note[];
}

export default function NoteList({ data }: Props) {
  const { remove } = useNoteMutations();
  return (
    <ul className={css.list}>
      {data?.map((note: Note) => (
        <li key={note.id} className={css.listItem}>
          <h2 className={css.title}>{note.title}</h2>
          <p className={css.content}>{note.content}</p>
          <div className={css.footer}>
            <span className={css.tag}>{note.tag}</span>
            {/* додати посилання View details*/}
            <Link href={`/notes/${note.id}`} className={css.link}>
              View details
            </Link>

            <button className={css.button} onClick={() => remove.mutate(note.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
