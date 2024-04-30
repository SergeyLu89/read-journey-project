import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import Header from 'components/Header/Header';
import Container from '../Container/Container';

const PrivateSharedLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <Container>
        <Suspense fallback={'Loading...'}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default PrivateSharedLayout;
