import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { DEFAULT_QUERY } from '@/constants/notes';
import { fetchNotes } from '@/lib/api/notes';
import { FetchNotesQuery, FetchNotesResponse } from '@/types/api';

export const useNotesList = (query?: FetchNotesQuery) => {
  const finalQuery = { ...DEFAULT_QUERY, ...query };

  return useQuery<FetchNotesResponse>({
    queryKey: ['notes', finalQuery],
    queryFn: () => fetchNotes(finalQuery),
    placeholderData: keepPreviousData,
  });
};
