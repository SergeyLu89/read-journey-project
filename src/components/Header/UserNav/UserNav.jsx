import css from './UserNav.module.css';
import { NavLink } from 'react-router-dom';

const UserNav = () => {
  return (
    <nav>
      <ul className={css.userNavList}>
        <li>
          <NavLink
            to="/recommended"
            className={({ isActive }) =>
              ` ${isActive ? css.active : css.headerNavLink}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/library"
            className={({ isActive }) =>
              ` ${isActive ? css.active : css.headerNavLink}`
            }
          >
            My library
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reading"
            className={({ isActive }) =>
              ` ${isActive ? css.active : css.readingNavLink}`
            }
          >
            My training
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default UserNav;
