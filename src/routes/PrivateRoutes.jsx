import PrivateSharedLayout from 'components/SharedLayout/PrivateSharedLayout';
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const RecommendedPage = lazy(() =>
  import('../pages/RecommendedPage/RecommendedPage.jsx')
);
const MyLibraryPage = lazy(() =>
  import('../pages/MyLibraryPage/MyLibraryPage.jsx')
);
const ReadingPage = lazy(() => import('../pages/ReadingPage/ReadingPage.jsx'));

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateSharedLayout />}>
        <Route index element={<Navigate to="/recommended" />} />
        <Route path="recommended" element={<RecommendedPage />} />
        <Route path="library" element={<MyLibraryPage />} />
        <Route path="reading" element={<ReadingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
