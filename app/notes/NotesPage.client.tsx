'use client';
import { useState } from 'react';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useDebouncedCallback } from 'use-debounce';

import Pagination from '@/components/common/Pagination/Pagination';
import SearchBox from '@/components/common/SearchBox/SearchBox';
import NoteList from '@/components/features/NoteList/NoteList';
import { fetchNotes } from '@/lib/api/notes';

import css from './page.module.css';

export default function NotesPageClient() {
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const handleSearch = useDebouncedCallback((e) => {
    setSearchText(e.target.value);
    setPage(1);
  }, 300);

  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ['notes', searchText, page],
    queryFn: () => fetchNotes({ search: searchText, page, perPage: 12 }),
    placeholderData: keepPreviousData,
  });

  if (isLoading) return <p>Loading notes...</p>;
  if (isError) return <p>Failed to load notes</p>;

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox defaultValue={searchText} onSearch={handleSearch} />

        {isSuccess && data.totalPages > 1 && (
          <Pagination pageCount={data?.totalPages ?? 0} currentPage={page} onChange={setPage} />
        )}

        <button className={css.button}>Create note +</button>
      </header>
      {isSuccess && data.notes.length > 0 && <NoteList data={data.notes} />}
    </div>
  );
}
