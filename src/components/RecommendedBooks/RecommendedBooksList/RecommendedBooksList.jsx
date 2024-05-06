// import css from './RecommendedBooksList.module.css';

import Paginator from 'components/reUseComponents/Paginator/Paginator';
import RecommendedBooksItem from '../RecommendedBooksItem/RecommendedBooksItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectRecommendedBooks,
  selectRecommendedTotalPages,
  selectRecommendedIsLoading,
  // selectRecommendedError,
} from '../../../redux/books/recommendedBooks/recommendedBooksSelectors';
import { getRecommended } from '../../../redux/books/recommendedBooks/recommendedBooksOperations';
import { useEffect } from 'react';
import { usePagination } from 'hooks/usePagination';
import { RecommendedBooksLimit } from 'constants/paginationLimits';

const RecommendedBooksList = () => {
  const { page, limit, setPage } = usePagination(RecommendedBooksLimit);

  const dispatch = useDispatch();
  const books = useSelector(selectRecommendedBooks);
  const totalPages = useSelector(selectRecommendedTotalPages);
  console.log('totalPages: ', totalPages);

  const isLoading = useSelector(selectRecommendedIsLoading);
  // const isError = useSelector(selectRecommendedError);

  useEffect(() => {
    let validPage = page;
    if (isNaN(parseInt(page)) || page <= 0) validPage = 1;

    const searchParams = new URLSearchParams({ page: validPage, limit });
    dispatch(getRecommended(searchParams));
  }, [dispatch, page, limit]);

  const booksAreNotFinded = !isLoading && totalPages === 0;

  return (
    <section>
      <h2>Recommended</h2>
      {isLoading && <p>Loading...</p>}
      {totalPages > 0 && (
        <>
          <Paginator setPage={setPage} page={page} totalPages={totalPages} />
          <ul>
            {books.map(book => (
              <RecommendedBooksItem book={book} key={book._id} />
            ))}
          </ul>
        </>
      )}

      {booksAreNotFinded && <p> EMPTY</p>}
    </section>
  );
};
export default RecommendedBooksList;
