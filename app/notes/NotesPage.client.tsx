'use client';
import { useState } from 'react';

import { useDebouncedCallback } from 'use-debounce';

import Pagination from '@/components/common/Pagination/Pagination';
import SearchBox from '@/components/common/SearchBox/SearchBox';
import Spinner from '@/components/common/Spinner/Spinner';
import NoteForm from '@/components/features/NoteForm/NoteForm';
import NoteList from '@/components/features/NoteList/NoteList';
import Modal from '@/components/ui/Modal/Modal';
import { useNotesList } from '@/hooks/useNotesList';

import css from './page.module.css';

export default function NotesPageClient() {
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSearch = useDebouncedCallback((e) => {
    setSearchText(e.target.value);
    setPage(1);
  }, 300);

  const { data, isError, isSuccess, isFetching, error } = useNotesList({
    search: searchText,
    page,
  });

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox defaultValue={searchText} onSearch={handleSearch} />

        {isSuccess && data?.totalPages > 1 && (
          <Pagination pageCount={data?.totalPages ?? 0} currentPage={page} onChange={setPage} />
        )}

        <button className={css.button} onClick={openModal}>
          Create note +
        </button>
      </header>
      {isSuccess && data?.notes.length > 0 ? (
        <NoteList data={data.notes} />
      ) : (
        <p>No notes found.</p>
      )}
      {isError && <p>Could not fetch the list of notes. {error.message}</p>}
      {isFetching && <Spinner />}

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <NoteForm onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
}
