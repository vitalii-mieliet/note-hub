import React from 'react';

import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import { getNote } from '@/lib/api/notes';
import { Note } from '@/schemas/note';

import NoteDetailsClient from './NoteDetails.client';

interface Props {
  params: Promise<{ id: Note['id'] }>;
}

export default async function NoteDetailsPage({ params }: Props) {
  const { id } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => getNote(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
}
