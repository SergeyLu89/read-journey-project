import css from './MyBook.module.css';
import sprite from '../../../assets/images/sprite.svg';
import { useSelector } from 'react-redux';
import { defaultImageBookbigPng } from 'assets/images/defaultImages/defaultImages';
import { selectIsWhileReading } from '../../../redux/books/readingBook/readingBookSelectors';

const MyBook = ({ book }) => {
  const isWhileReading = useSelector(selectIsWhileReading);
  const { imageUrl, title, author } = book;
  return (
    <section className={css.myBookSction}>
      <h2>My reading</h2>
      <div className={css.bookWrapper}>
        <img src={imageUrl ? imageUrl : defaultImageBookbigPng} alt={title} />
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
      {isWhileReading ? (
        // <span className={css.indicatorStop}>STOP</span>
        <svg className={css.statusSvg} aria-label="stop icon">
          <use href={sprite + '#icon-stop'}></use>
        </svg>
      ) : (
        // <span className={css.indicatorStart}>START</span>
        <svg className={css.statusSvg} aria-label="start icon">
          <use href={sprite + '#icon-start'}></use>
        </svg>
      )}
    </section>
  );
};
export default MyBook;
