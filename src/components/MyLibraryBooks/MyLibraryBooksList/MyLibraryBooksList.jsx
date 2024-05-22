import css from './MyLibraryBooksList.module.css';
import { booksPng } from '../../../assets/images/defaultImages/defaultImages';
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
    <section className={css.libraryBooks}>
      {isError && <p>Oops, something went wrong.</p>}
      <h2 className={css.libraryBooksTitle}>My library</h2>
      {isLoading && <p>Loading...</p>}
      {userBooks.length !== 0 ? (
        <ul className={css.libraryBooksList}>
          {userBooks.map(book => (
            <MyLibraryBooksItem book={book} key={book._id} />
          ))}
        </ul>
      ) : (
        <div className={css.noContentBox}>
          <div className={css.imgWrapper}>
            <img src={booksPng} alt="like" className={css.booksImage} />
          </div>
          <p>
            To start training, add <span>some of your books</span> or from the
            recommended ones
          </p>
        </div>
      )}
    </section>
  );
};
export default MyLibraryBooksList;
