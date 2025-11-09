import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import { DEFAULT_QUERY } from '@/constants/notes';
import { fetchNotes } from '@/lib/api/notes';
import { FetchNotesResponse } from '@/types/api';

import NotesPageClient from './NotesPage.client';

export default async function NotesPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery<FetchNotesResponse>({
    queryKey: ['notes', DEFAULT_QUERY],
    queryFn: () => fetchNotes(DEFAULT_QUERY),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesPageClient />
    </HydrationBoundary>
  );
}
