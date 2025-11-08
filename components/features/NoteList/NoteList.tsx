'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { deleteNote } from '@/lib/api/notes';
import { Note } from '@/types/note';

import css from './NoteList.module.css';

interface Props {
  data: Note[];
}

export default function NoteList({ data }: Props) {
  const queryClient = useQueryClient();

  const removeNote = useMutation({
    mutationFn: (id: Note['id']) => deleteNote(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
      toast.success('Note deleted successfully');
    },
    onError: () => {
      toast.error('Failed to delete note. Please try again.');
    },
  });
  return (
    <ul className={css.list}>
      {data?.map((note: Note) => (
        <li key={note.id} className={css.listItem}>
          <h2 className={css.title}>{note.title}</h2>
          <p className={css.content}>{note.content}</p>
          <div className={css.footer}>
            <span className={css.tag}>{note.tag}</span>
            {/* додати посилання View details*/}
            <button className={css.button} onClick={() => removeNote.mutate(note.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
