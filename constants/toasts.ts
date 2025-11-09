export const TOASTS = {
  notes: {
    create: {
      success: 'Note created successfully',
      error: 'Failed to create note. Please try again.',
    },
    delete: {
      success: 'Note deleted successfully',
      error: 'Failed to delete note. Please try again.',
    },
    update: {
      success: 'Note updated successfully',
      error: 'Failed to update note. Please try again.',
    },
  },
} as const;
