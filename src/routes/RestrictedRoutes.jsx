import RestrictedSharedLayout from 'components/SharedLayout/RestrictedSharedLayout.jsx';
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const RegisterPage = lazy(() =>
  import('../pages/RegisterPage/RegisterPage.jsx')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

const RestrictedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RestrictedSharedLayout />}>
        <Route index element={<Navigate to="/register" />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="*" element={<Navigate to="/register" />} />
      </Route>
    </Routes>
  );
};

export default RestrictedRoutes;
