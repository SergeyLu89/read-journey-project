import css from './Header.module.css';
import Logo from './Logo/Logo';
import UserNav from './UserNav/UserNav';
import UserBar from './UserBar/UserBar';
import { useDispatch } from 'react-redux';
import { logOutThunk } from '../../redux/auth/authOperations';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <section className={css.header}>
      <Logo />
      <UserNav />
      <UserBar />
      <button
        type="button"
        onClick={() => {
          dispatch(logOutThunk());
        }}
      >
        Log out
      </button>
      {/* <button
        type="button"
        onClick={() => {
          dispatch(refreshUserThunk());
        }}
      >
        ref token
      </button> */}
    </section>
  );
};
export default Header;
