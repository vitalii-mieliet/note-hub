import { TAG_OPTIONS } from '@/constants/notes';

export type TagOption = (typeof TAG_OPTIONS)[number];
export type Tag = TagOption['value'];

export interface Note {
  id: string;
  title: string;
  content?: string;
  createdAt: string;
  updatedAt: string;
  tag: Tag;
}

export type NoteFormData = Omit<Note, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateNoteData = { id: Note['id'] } & Partial<Omit<Note, 'id'>>;
