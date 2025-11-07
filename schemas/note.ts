import * as z from 'zod';

import { TAG_OPTIONS } from '@/constants/notes';
import { Tag } from '@/types/note';

export const tagValues = TAG_OPTIONS.map(({ value }) => value);

export const noteFormSchema = z.object({
  title: z
    .string()
    .min(3, { message: 'Title must be at least 3 characters long' })
    .max(50, { message: 'Title must be at most 50 characters long' })
    .refine((val) => val.trim().length > 0, { message: 'Title is required' }),

  content: z
    .string()
    .max(500, { message: 'Content must be at most 500 characters long' })
    .optional(),

  tag: z.custom<Tag>((val) => tagValues.includes(val as Tag), {
    message: 'Invalid tag value',
  }),
});
