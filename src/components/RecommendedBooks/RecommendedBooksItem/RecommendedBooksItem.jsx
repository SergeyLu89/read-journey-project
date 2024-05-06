// import css from './RecommendedBooksItem.module.css'

const RecommendedBooksItem = ({ book }) => {
  const { author, imageUrl, title } = book;
  return (
    <li>
      <img src={imageUrl} alt={title} />
      <h4>{title}</h4>
      <p>{author}</p>
    </li>
  );
};
export default RecommendedBooksItem;
