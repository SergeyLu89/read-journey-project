import css from './MyBook.module.css';
import sprite from '../../../assets/images/sprite.svg';
import { useSelector } from 'react-redux';
import { defaultImageBookbigPng } from 'assets/images/defaultImages/defaultImages';
import { selectIsWhileReading } from '../../../redux/books/readingBook/readingBookSelectors';

const MyBook = ({ book }) => {
  const isWhileReading = useSelector(selectIsWhileReading);
  const { imageUrl, title, author, timeLeftToRead } = book;

  const hours = timeLeftToRead?.hours;
  const minutes = timeLeftToRead?.minutes;

  return (
    <section className={css.myBookSction}>
      <div className={css.titleWrapper}>
        <h2>My reading</h2>
        {timeLeftToRead && (
          <p className={css.readingTime}>
            {hours} hours and {minutes} minutes left
          </p>
        )}
      </div>
      <div className={css.bookWrapper}>
        <img src={imageUrl ? imageUrl : defaultImageBookbigPng} alt={title} />
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
      {isWhileReading ? (
        <svg className={css.statusSvg} aria-label="stop icon">
          <use href={sprite + '#icon-stop'}></use>
        </svg>
      ) : (
        <svg className={css.statusSvg} aria-label="start icon">
          <use href={sprite + '#icon-start'}></use>
        </svg>
      )}
    </section>
  );
};
export default MyBook;
