import { useRecommendedFilter } from 'hooks/useRecommendedFilter';
import css from './RecommendedFilter.module.css';
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
    console.log('values: ', values);
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
          />
        </div>

        <button type="submit">To apply</button>
      </form>
    </section>
  );
};
export default RecommendedFilter;
