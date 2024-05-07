import { useSearchParams } from 'react-router-dom';

export const useRecommendedFilter = () => {
  const [params, setParams] = useSearchParams();
  const title = params.get('title') ?? '';
  const author = params.get('author') ?? '';

  const setRecommendedFilter = (key, value) => {
    if (value === '') {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    params.set('page', 1);
    setParams(params);
  };

  const resetRecommendedFilter = () => {
    setParams({ title: '', author: '' });
  };

  return {
    title,
    author,
    setRecommendedFilter,
    resetRecommendedFilter,
  };
};
