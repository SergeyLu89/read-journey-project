// import css from './RecommendedBooksList.module.css';

import RecommendedBooksItem from '../RecommendedBooksItem/RecommendedBooksItem';

const RecommendedBooksList = ({ books }) => {
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
          <RecommendedBooksItem book={book} key={book._id} />
        ))}
      </ul>
    </section>
  );
};
export default RecommendedBooksList;
