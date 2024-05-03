// import css from './RecommendedBooksList.module.css';

import RecommendedBooksItem from '../RecommendedBooksItem/RecommendedBooksItem';

const RecommendedBooks = ({ books }) => {
  return (
    <section>
      <h2>Recommended</h2>
      <ul>
        <li>
          <button type="button">Left</button>
        </li>
        <li>
          <button type="button">Right</button>
        </li>
      </ul>
      <ul>
        {books.map(book => (
          <RecommendedBooksItem book={book} key={book.id} />
        ))}
        <li></li>
      </ul>
    </section>
  );
};
export default RecommendedBooks;
