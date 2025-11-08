import { Note, NoteFormData, UpdateNoteData } from '@/types/note';

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

export const createNote = async (noteData: NoteFormData) => {
  const res = await api.post<Note>(`/notes`, noteData);
  return res.data;
};

export const updateNote = async ({ id, ...noteData }: UpdateNoteData) => {
  const res = await api.patch<Note>(`/notes/${id}`, noteData);
  return res.data;
};

export const deleteNote = async (id: Note['id']) => {
  const res = await api.delete<Note>(`/notes/${id}`);
  return res.data;
};
