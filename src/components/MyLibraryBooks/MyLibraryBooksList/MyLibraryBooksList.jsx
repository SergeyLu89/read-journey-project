import css from './MyLibraryBooksList.module.css';
import { booksPng } from '../../../assets/images/defaultImages/defaultImages';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLibraryBooksThunk } from '../../../redux/books/libraryBooks/libraryBooksOperations';
import {
  selectLibraryBooks,
  selectLibraryError,
  selectLibraryIsLoading,
} from '../../../redux/books/libraryBooks/libraryBooksSelectors';
import MyLibraryBooksItem from '../MyLibraryBooksItem/MyLibraryBooksItem';
import BaseFilter from 'components/Forms/BaseFilter/BaseFilter';
import { Loader } from 'components/Loader/Loader';

const options = [
  { value: 'unread', label: 'Unread' },
  { value: 'in-progress', label: 'In progress' },
  { value: 'done', label: 'Done' },
  { value: '', label: 'All books' },
];

const MyLibraryBooksList = () => {
  const userBooks = useSelector(selectLibraryBooks);
  const isLoading = useSelector(selectLibraryIsLoading);
  const isError = useSelector(selectLibraryError);
  const dispatch = useDispatch();

  const [status, setStatus] = useState('');

  const selectStatus = value => {
    setStatus(value);
  };
  useEffect(() => {
    (async () => {
      try {
        const searchParams = new URLSearchParams();
        if (status) searchParams.set('status', status);

        await dispatch(getLibraryBooksThunk(searchParams)).unwrap();
      } catch (error) {
        console.error(error);
      }
    })();
  }, [dispatch, status]);

  return (
    <section className={css.libraryBooks}>
      {isError && <p>Oops, something went wrong.</p>}
      <BaseFilter
        options={options}
        defaultValue={options[options.length - 1]}
        onChange={selectStatus}
      />
      <h2 className={css.libraryBooksTitle}>My library</h2>
      {isLoading && <Loader />}
      {userBooks.length !== 0 ? (
        <ul className={css.libraryBooksList}>
          {userBooks.map(book => (
            <MyLibraryBooksItem book={book} key={book._id} />
          ))}
        </ul>
      ) : (
        <div className={css.noContentBox}>
          <div className={css.imgWrapper}>
            <img src={booksPng} alt="book" className={css.booksImage} />
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
