import css from './RecommendedFilter.module.css';
import { useRecommendedFilter } from 'hooks/useRecommendedFilter';
import { useForm } from 'react-hook-form';

const RecommendedFilter = () => {
  const { title, author, setRecommendedFilter } = useRecommendedFilter();
  const { handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      title: title || '',
      author: author || '',
    },
  });

  const onSubmit = values => {
    setRecommendedFilter('title', values.title);
    setRecommendedFilter('author', values.author);
  };

  return (
    <section className={css.recommendedFilter}>
      <p>Filters:</p>
      <form
        autoComplete="off"
        className={css.filterForm}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={css.inputWrapper}>
          <label htmlFor="title">Book title:</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={e => {
              setValue('title', e.target.value);
            }}
            value={watch('title' || '')}
            className={css.titleInput}
          />
        </div>

        <div className={css.inputWrapper}>
          <label htmlFor="author">The author:</label>
          <input
            type="text"
            name="author"
            id="author"
            onChange={e => {
              setValue('author', e.target.value);
            }}
            value={watch('author' || '')}
            className={css.authorInput}
          />
        </div>

        <button type="submit" className={css.filterBnt}>
          To apply
        </button>
      </form>
    </section>
  );
};
export default RecommendedFilter;
