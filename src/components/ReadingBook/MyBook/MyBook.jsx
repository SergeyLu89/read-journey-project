import { useSelector } from 'react-redux';
import css from './MyBook.module.css';
import { defaultImageBookbigPng } from 'assets/images/defaultImages/defaultImages';
import { selectIsWhileReading } from '../../../redux/books/readingBook/readingBookSelectors';

const MyBook = ({ book }) => {
  const isWhileReading = useSelector(selectIsWhileReading);
  const { imageUrl, title, author } = book;
  return (
    <section>
      <h2>My reading</h2>
      <div>
        <img src={imageUrl ? imageUrl : defaultImageBookbigPng} alt={title} />
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
      {isWhileReading ? (
        <span className={css.indicatorStop}>STOP</span>
      ) : (
        <span className={css.indicatorStart}>START</span>
      )}
    </section>
  );
};
export default MyBook;
