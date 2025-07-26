import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
// import { useDispatch } from 'react-redux';

const Home = lazy(() => import('./pages/Home.jsx'));
const DetailsCar = lazy(() => import('./pages/DetailsCar.jsx'));
const CatalogCars = lazy(() => import('./pages/CatalogCars.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));

function App() {
  // const dispatch = useDispatch();
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<CatalogCars />} />
          <Route path="catalog/:id" element={<DetailsCar />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
