import { useQuery } from '@tanstack/react-query';

import { getNote } from '@/lib/api/notes';
import { Note } from '@/schemas/note';

export const useNoteDetails = (id?: Note['id']) => {
  return useQuery<Note>({
    queryKey: ['notes', 'detail', id],
    queryFn: () => getNote(id!),
    enabled: !!id,
  });
};
