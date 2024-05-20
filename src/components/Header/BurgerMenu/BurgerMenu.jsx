import css from './BurgerMenu.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOutThunk } from '../../../redux/auth/authOperations';
import sprite from '../../../assets/images/sprite.svg';
import { useCallback, useEffect } from 'react';

const BurgerMenu = ({ isOpen, closeMenu }) => {
  const dispatch = useDispatch();

  const closeOnClick = useCallback(() => {
    if (isOpen) {
      closeMenu();
    }
  }, [isOpen, closeMenu]);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [isOpen]);

  return (
    <div className={css.backdrop}>
      <div className={css.menu}>
        <button className={css.modalCloseBtn} onClick={closeOnClick}>
          <svg width="28" height="28" aria-label="cross icon">
            <use href={sprite + '#icon-sross'}></use>
          </svg>
        </button>
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
          </ul>
        </nav>
        <button
          type="button"
          onClick={() => {
            dispatch(logOutThunk());
            document.body.style.overflow = 'auto';
          }}
          className={css.logOutBtn}
        >
          Log out
        </button>
      </div>
    </div>
  );
};
export default BurgerMenu;
