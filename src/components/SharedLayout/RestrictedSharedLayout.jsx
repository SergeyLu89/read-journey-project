import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { TostBox } from '../reUseComponents/Toast';

const RestrictedSharedLayout = () => {
  return (
    <div className="restricted-page-container">
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
      {/* <TostBox /> */}
    </div>
  );
};

export default RestrictedSharedLayout;
