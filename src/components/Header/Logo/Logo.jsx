import css from './Logo.module.css';
import { Link } from 'react-router-dom';
import sprite from '../../../assets/images/sprite.svg';

const Logo = () => {
  return (
    <>
      <Link to="/" className={css.logo}>
        <svg
          width="42"
          height="17"
          fill="#1f1f1f"
          stroke="#1f1f1f"
          aria-label="logo icon"
        >
          <use href={sprite + '#icon-logo'}></use>
        </svg>
        read journey
      </Link>
    </>
  );
};
export default Logo;
