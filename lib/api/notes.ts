import { Note } from '@/types/note';

import { api } from '.';

interface QueryParams {
  search?: string;
  tag?: string;
  page?: number;
  perPage?: number;
  sortBy?: 'created' | 'updated';
}

interface NotesHttpResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (params: QueryParams) => {
  const res = await api.get<NotesHttpResponse>('/notes', { params });
  return res.data;
};
