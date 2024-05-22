import css from './ReadingPage.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getRedingBookThunk } from '../../redux/books/readingBook/readingBookOperations';
import {
  selectReadingBook,
  selectReadingIsLoading,
} from '../../redux/books/readingBook/readingBookSelectors';
import Dashboard from 'components/reUseComponents/Dashboard/Dashboard';
import MyBook from 'components/ReadingBook/MyBook/MyBook';
import Progress from 'components/ReadingBook/Progress/Progress';
import AddReadingForm from 'components/Forms/AddReadingForm/AddReadingForm';
import Details from 'components/ReadingBook/Details/Details';

const ReadingPage = () => {
  const location = useLocation();
  const bookId = location.state?.bookId;
  const book = useSelector(selectReadingBook);
  console.log('book: ', book);
  const isLoading = useSelector(selectReadingIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRedingBookThunk(bookId));
  }, [dispatch, bookId]);

  if (!bookId) {
    return <Navigate to="/library" />;
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {book && (
        <div className={css.readingPageWrapper}>
          <Dashboard>
            <AddReadingForm book={book} />
            {book.status === 'unread' ? <Progress /> : <Details book={book} />}
          </Dashboard>
          <MyBook book={book} />
        </div>
      )}
    </>
  );
};
export default ReadingPage;
