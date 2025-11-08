import { NewNoteData, Note, UpdatedNoteData } from '@/schemas/note';
import { FetchNotesQuery, FetchNotesResponse } from '@/types/api';

import { api } from '.';

export const fetchNotes = async (params: FetchNotesQuery) => {
  const res = await api.get<FetchNotesResponse>('/notes', { params });
  return res.data;
};

export const createNote = async (noteData: NewNoteData) => {
  const res = await api.post<Note>(`/notes`, noteData);
  return res.data;
};

export const updateNote = async ({ id, ...noteData }: UpdatedNoteData) => {
  const res = await api.patch<Note>(`/notes/${id}`, noteData);
  return res.data;
};

export const deleteNote = async (id: Note['id']) => {
  const res = await api.delete<Note>(`/notes/${id}`);
  return res.data;
};
