import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import RestrictedRoutes from 'routes/RestrictedRoutes';
import PrivateRoutes from 'routes/PrivateRoutes';
import { selectAuthIsLoading } from '../redux/auth/authSelectors';
import { fetchCurrentThunk } from '../redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const isAuthLoading = useSelector(selectAuthIsLoading);
  const { isRefreshing, isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentThunk());
    setIsFirstRender(false);
  }, [dispatch]);

  const isLoading = isAuthLoading || isRefreshing;
  if (isLoading) return <Loader />;

  const isNotAuth =
    !isFirstRender && !isLoggedIn && !isAuthLoading && !isRefreshing;
  if (isNotAuth) return <RestrictedRoutes />;

  const isAuth = !isFirstRender && isLoggedIn && !isRefreshing;
  if (isAuth) return <PrivateRoutes />;
};
