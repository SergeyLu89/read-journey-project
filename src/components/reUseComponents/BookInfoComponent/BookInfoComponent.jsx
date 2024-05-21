import css from './BookInfoComponent.module.css';
import { defaultImageBookSmallPng } from 'assets/images/defaultImages/defaultImages';

const BookInfoComponent = ({ book }) => {
  const { author, imageUrl, title, totalPages } = book;

  return (
    <div className={css.bookInfoWrapper}>
      <img src={imageUrl ? imageUrl : defaultImageBookSmallPng} alt={title} />
      <h3>{title}</h3>
      <p className={css.author}>{author}</p>
      <p className={css.pages}>{totalPages}</p>
    </div>
  );
};
export default BookInfoComponent;
