'use client';

import { useParams } from 'next/navigation';

import Spinner from '@/components/common/Spinner/Spinner';
import { useNoteDetails } from '@/hooks/useNoteDetails';

import css from './NoteDetails.module.css';

export default function NoteDetailsClient() {
  const { id } = useParams<{ id: string }>();
  const { data: note, isError, isLoading } = useNoteDetails(id);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main className={css.main}>
      {isError || !note ? (
        <p>Something went wrong.</p>
      ) : (
        <div className={css.container}>
          <div className={css.item}>
            <div className={css.header}>
              <h2>{note?.title}</h2>
            </div>
            <p className={css.content}>{note?.content}</p>
            <p className={css.date}>{note?.createdAt}</p>
          </div>{' '}
        </div>
      )}
    </main>
  );
}
