import css from './UserBar.module.css';
import { useSelector } from 'react-redux';
import { selectAuthUser } from '../../../redux/auth/authSelectors';

const UserBar = () => {
  const user = useSelector(selectAuthUser);
  return (
    <div className={css.userBox}>
      <div className={css.avatar}>
        <span>{user.name.slice(0, 1)}</span>
      </div>
      <p>{user.name}</p>
    </div>
  );
};
export default UserBar;
