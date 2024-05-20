import css from './Paginator.module.css';
import sprite from '../../../assets/images/sprite.svg';

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
        <button
          type="button"
          disabled={page === 1}
          onClick={decrementPage}
          className={`${css.paginationBtn} ${page === 1 && css.disabledBtn}`}
        >
          <svg width="16" height="16" aria-label="left arrow icon">
            <use href={sprite + '#icon-chevron-left'}></use>
          </svg>
        </button>
      </li>
      <li>
        <button
          type="button"
          disabled={page === totalPages}
          onClick={incrementPage}
          className={`${css.paginationBtn} ${
            page === totalPages && css.disabledBtn
          }`}
        >
          <svg width="16" height="16" aria-label="right arrow icon">
            <use href={sprite + '#icon-chevron-right'}></use>
          </svg>
        </button>
      </li>
    </ul>
  );
};

export default Paginator;
