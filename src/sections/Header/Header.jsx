import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Logo from '../../components/Logo/Logo.jsx';

import css from './Header.module.css';

const Header = () => {
  const addActive = ({ isActive }) => (isActive ? css.active : css.link);
  return (
    <>
      <header className={css.header}>
        <section className={css.sectionHeader}>
          <div className={css.wrapper}>
            <Logo />
            <nav className={css.nav}>
              <ul>
                <li>
                  <NavLink to="/" className={addActive}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/catalog" className={addActive}>
                    Catalog
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
