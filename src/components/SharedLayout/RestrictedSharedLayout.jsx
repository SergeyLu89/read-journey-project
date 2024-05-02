import Container from 'components/Container/Container';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { TostBox } from '../reUseComponents/Toast';

const RestrictedSharedLayout = () => {
  return (
    <Container>
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
      {/* <TostBox /> */}
    </Container>
  );
};

export default RestrictedSharedLayout;
