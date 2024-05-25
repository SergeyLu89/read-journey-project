import Container from 'components/Container/Container';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const RestrictedSharedLayout = () => {
  return (
    <Container>
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default RestrictedSharedLayout;
