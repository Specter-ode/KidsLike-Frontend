import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
// import PrivateRoutes from './PrivateRoutes';
// import PublicRoutes from './PublicRoutes';
// import { useSelector } from 'react-redux';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const AuthPage = lazy(() => import('../pages/AuthPage/AuthPage'));
const PlanningPage = lazy(() => import('../pages/PlanningPage/PlanningPage'));
const AwardsPage = lazy(() => import('../pages/AwardsPage/AwardsPage'));

const PageRoutes: React.FC = () => {
  //   const isAuth = useSelector(getLoginStatus);
  const isAuth = false;
  const correctComponent = isAuth ? <MainPage /> : <AuthPage />;
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* <PublicRoutes> */}
        <Route path="/auth" element={<AuthPage />} />
        {/* </PublicRoutes>
        <PrivateRoutes> */}
        <Route path="/main" element={<MainPage />} />
        <Route path="/planning" element={<PlanningPage />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="*" element={correctComponent} />
        {/* </PrivateRoutes> */}
      </Routes>
    </Suspense>
  );
};

export default PageRoutes;