import { NavLink, Outlet } from 'react-router-dom';
import css from '../Layout/Layout.module.css';

export default function Layout() {
  return (
    <>
        <header className={css.header}>
          <nav  className={css.headerList}>
            <NavLink to="/" className={css.headerLink}>
              Home
            </NavLink>
            <NavLink to="/tweets" className={css.headerLink}>
              Tweets
            </NavLink>
          </nav>
        </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
