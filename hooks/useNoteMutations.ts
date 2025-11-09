import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { TOASTS } from '@/constants/toasts';
import { createNote, deleteNote, updateNote } from '@/lib/api/notes';
import { NewNoteData, Note, UpdatedNoteData } from '@/schemas/note';

export const useNoteMutations = () => {
  const queryClient = useQueryClient();
  const invalidateNotes = () => queryClient.invalidateQueries({ queryKey: ['notes'] });

  const create = useMutation<Note, Error, NewNoteData>({
    mutationFn: createNote,
    onSuccess: () => {
      invalidateNotes();
      toast.success(TOASTS.notes.create.success);
    },
    onError: () => {
      toast.error(TOASTS.notes.create.error);
    },
  });

  const update = useMutation<Note, Error, UpdatedNoteData>({
    mutationFn: updateNote,
    onSuccess: () => {
      invalidateNotes();
      toast.success(TOASTS.notes.update.success);
    },
    onError: () => {
      toast.error(TOASTS.notes.update.error);
    },
  });

  const remove = useMutation<Note, Error, Note['id']>({
    mutationFn: deleteNote,
    onSuccess: () => {
      invalidateNotes();
      toast.success(TOASTS.notes.delete.success);
    },
    onError: () => {
      toast.error(TOASTS.notes.delete.error);
    },
  });

  const status = {
    isPending: create.isPending || update.isPending || remove.isPending,
    isError: create.isError || update.isError || remove.isError,
  };

  return { create, update, remove, status };
};
