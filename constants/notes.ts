import { FetchNotesQuery } from '@/types/api';

export const TAG_OPTIONS = [
  { value: 'Todo', label: 'Todo' },
  { value: 'Work', label: 'Work' },
  { value: 'Personal', label: 'Personal' },
  { value: 'Meeting', label: 'Meeting' },
  { value: 'Shopping', label: 'Shopping' },
] as const;

export const TAG_VALUES = TAG_OPTIONS.map(({ value }) => value) as string[];

export const DEFAULT_QUERY: FetchNotesQuery = {
  search: '',
  page: 1,
  perPage: 12,
};
