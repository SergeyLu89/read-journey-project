// import css from './BookInfoComponent.module.css'

const BookInfoComponent = ({ book }) => {
  const { author, imageUrl, title, totalPages } = book;

  return (
    <>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{totalPages}</p>
    </>
  );
};
export default BookInfoComponent;
