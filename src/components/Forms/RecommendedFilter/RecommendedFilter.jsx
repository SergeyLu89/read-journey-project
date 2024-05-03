import css from './RecommendedFilter.module.css';

const RecommendedFilter = () => {
  return (
    <>
      <p>Filters:</p>
      <form autoComplete="off" className={css.filterForm}>
        <label htmlFor="title"></label>
        <input type="text" name="title" id="title" />

        <label htmlFor="author"></label>
        <input type="text" name="author" id="author" />

        <button type="submit">To apply</button>
      </form>
    </>
  );
};
export default RecommendedFilter;
