import ReactPaginate from 'react-paginate';

import css from './Pagination.module.css';

interface Props {
  pageCount: number;
  currentPage: number;
  onChange: (value: number) => void;
}

export default function Pagination({ pageCount, currentPage, onChange }: Props) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={({ selected }) => onChange(selected + 1)}
      forcePage={currentPage - 1}
      pageRangeDisplayed={5}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      renderOnZeroPageCount={null}
      containerClassName={css.pagination}
      activeClassName={css.active}
    />
  );
}
