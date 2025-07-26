import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../sections/Header/Header.jsx';
import Loader from '../Loader/Loader.jsx';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
