import css from './Paginator.module.css';

const Paginator = ({ setPage, page, totalPages }) => {
  const incrementPage = () => {
    setPage(page + 1);
  };
  const decrementPage = () => {
    setPage(page - 1);
  };
  return (
    <ul className={css.paginator}>
      <li>
        <button type="button" disabled={page === 1} onClick={decrementPage}>
          Left
        </button>
      </li>
      <li>
        <button
          type="button"
          disabled={page === totalPages}
          onClick={incrementPage}
        >
          Right
        </button>
      </li>
    </ul>
  );
};

export default Paginator;
