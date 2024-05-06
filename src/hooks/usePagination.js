import { useSearchParams } from 'react-router-dom';

import { getDeviceType } from 'helpers/getDeviceType';

export const usePagination = pageLimits => {
  const [params, setParams] = useSearchParams();
  const page = params.get('page') ?? 1;
  const limit = params.get('limit') ?? pageLimits[getDeviceType()];

  const setPage = value => {
    params.set('page', value);
    setParams(params);
  };

  const setLimit = value => {
    params.set('limit', value);
    setParams(params);
  };

  return {
    page: Number(page),
    limit: Number(limit),
    setPage,
    setLimit,
  };
};
