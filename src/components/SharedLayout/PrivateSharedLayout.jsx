import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const PrivateSharedLayout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </Container>
  );
};

export default PrivateSharedLayout;
