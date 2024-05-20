import css from './Header.module.css';
import Logo from './Logo/Logo';
import UserNav from './UserNav/UserNav';
import UserBar from './UserBar/UserBar';
import { useDispatch } from 'react-redux';
import { logOutThunk } from '../../redux/auth/authOperations';
import { useState } from 'react';
import sprite from '../../assets/images/sprite.svg';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };
  return (
    <section className={css.header}>
      <Logo />
      <UserNav />
      <div className={css.userBarWrapper}>
        <UserBar />
        <button
          type="button"
          onClick={() => {
            dispatch(logOutThunk());
          }}
          className={css.logOutBtn}
        >
          Log out
        </button>
        <button className={css.burgerBtn} onClick={openMenu}>
          <svg width="28" height="28" aria-label="menu icon">
            <use href={sprite + '#icon-menu'}></use>
          </svg>
        </button>
      </div>
      {isOpen && <BurgerMenu isOpen={isOpen} closeMenu={closeMenu} />}
    </section>
  );
};
export default Header;
