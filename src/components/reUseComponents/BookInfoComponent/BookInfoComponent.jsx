// import css from './BookInfoComponent.module.css'
import { defaultImageBookSmallPng } from 'assets/images/defaultImages/defaultImages';

const BookInfoComponent = ({ book }) => {
  const { author, imageUrl, title, totalPages } = book;

  return (
    <>
      <img src={imageUrl ? imageUrl : defaultImageBookSmallPng} alt={title} />
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{totalPages}</p>
    </>
  );
};
export default BookInfoComponent;
