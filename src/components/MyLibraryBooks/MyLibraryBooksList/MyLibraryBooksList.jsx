// import css from './MyLibraryBooksList.module.css'

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLibraryBooksThunk } from '../../../redux/books/libraryBooks/libraryBooksOperations';
import {
  selectLibraryBooks,
  selectLibraryError,
  selectLibraryIsLoading,
} from '../../../redux/books/libraryBooks/libraryBooksSelectors';
import MyLibraryBooksItem from '../MyLibraryBooksItem/MyLibraryBooksItem';

const MyLibraryBooksList = () => {
  const userBooks = useSelector(selectLibraryBooks);
  const isLoading = useSelector(selectLibraryIsLoading);
  const isError = useSelector(selectLibraryError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLibraryBooksThunk());
  }, [dispatch]);

  return (
    <section>
      {isError && <p>Oops, something went wrong.</p>}
      <h2>My library</h2>
      {isLoading && <p>Loading...</p>}
      <ul>
        {userBooks.map(book => (
          <MyLibraryBooksItem book={book} key={book._id} />
        ))}
      </ul>
    </section>
  );
};
export default MyLibraryBooksList;
