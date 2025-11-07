import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { TAG_OPTIONS } from '@/constants/notes';
import { noteFormSchema } from '@/schemas/note';
import { NoteFormData } from '@/types/note';

import css from './NoteForm.module.css';

interface Props {
  onClose: () => void;
}

export default function NoteForm({ onClose }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NoteFormData>({
    resolver: zodResolver(noteFormSchema),
    defaultValues: {
      title: '',
      content: '',
      tag: 'todo',
    },
  });

  const onSubmit: SubmitHandler<NoteFormData> = (data) => {
    reset();
    onClose();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.formGroup}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          className={css.input}
          {...register('title', { required: true })}
          aria-invalid={errors.title ? 'true' : 'false'}
        />

        {errors.title && <p className={css.error}>{errors.title.message}</p>}
      </div>

      <div className={css.formGroup}>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          rows={8}
          className={css.textarea}
          {...register('content')}
          aria-invalid={errors.content ? 'true' : 'false'}
        />
        {errors.content && <p className={css.error}>{errors.content.message}</p>}
      </div>

      <div className={css.formGroup}>
        <label htmlFor="tag">Tag</label>
        <select
          id="tag"
          className={css.select}
          {...register('tag', { required: true })}
          aria-invalid={errors.tag ? 'true' : 'false'}
        >
          {TAG_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        {errors.tag && <p className={css.error}>{errors.tag.message}</p>}
      </div>

      <div className={css.actions}>
        <button type="button" onClick={onClose} className={css.cancelButton}>
          Cancel
        </button>
        <button type="submit" className={css.submitButton}>
          Create note
        </button>
      </div>
    </form>
  );
}
