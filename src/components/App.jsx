// import RestrictedRoutes from 'routes/RestrictedRoutes';
import PrivateRoutes from 'routes/PrivateRoutes';

export const App = () => {
  return (
    <>
      {/* <RestrictedRoutes /> */}
      <PrivateRoutes />
    </>
  );
};
