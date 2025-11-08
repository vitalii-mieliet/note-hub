import * as z from 'zod';

import { TAG_VALUES } from '@/constants/notes';

export const TagSchema = z
  .string()
  .refine((val) => TAG_VALUES.includes(val), { message: 'Invalid tag value' });

export const TimeStampSchema = z.object({
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const NoteBaseSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string().optional(),
  tag: TagSchema,
});

export const NoteSchema = NoteBaseSchema.extend(TimeStampSchema.shape);

export const NoteFormSchema = NoteBaseSchema.omit({
  id: true,
}).extend({
  title: z
    .string()
    .min(3, { message: 'Title must be at least 3 characters long' })
    .max(50, { message: 'Title must be at most 50 characters long' })
    .refine((val) => val.trim().length > 0, { message: 'Title is required' }),

  content: z
    .string()
    .max(500, { message: 'Content must be at most 500 characters long' })
    .optional(),
});

export const CreateNoteFormSchema = NoteFormSchema;
export const UpdateNoteFormSchema = NoteFormSchema.partial();

export type Tag = z.infer<typeof TagSchema>;
export type Note = z.infer<typeof NoteSchema>;
export type NewNoteData = z.infer<typeof CreateNoteFormSchema>;
export type UpdatedNoteFormData = z.infer<typeof UpdateNoteFormSchema>;
export type UpdatedNoteData = { id: Note['id'] } & UpdatedNoteFormData;
