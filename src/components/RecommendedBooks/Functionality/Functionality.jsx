import css from './Functionality.module.css';
import sprite from '../../../assets/images/sprite.svg';

import { Link } from 'react-router-dom';

const Functionality = () => {
  return (
    <section className={css.functionalitySection}>
      <h3>Start your workout</h3>
      <ul className={css.functionalityList}>
        <li className={css.functionalityListItem}>
          <div className={css.numberWrapper}>
            <span>1</span>
          </div>
          <p className={css.functionalityDescr}>
            <span>Create a personal library:</span> add the books you intend to
            read to it.
          </p>
        </li>
        <li className={css.functionalityListItem}>
          <div className={css.numberWrapper}>
            <span>2</span>
          </div>
          <p className={css.functionalityDescr}>
            <span>Create your first workout:</span> define a goal, choose a
            period, start training.
          </p>
        </li>
      </ul>
      <div className={css.functionalityLinkWrapper}>
        <Link className={css.functionalityLink} to="/library">
          My library
        </Link>
        <Link className={css.functionalityLinkSvg} to="/library">
          <svg width="24" height="24" aria-label="arrow icon">
            <use href={sprite + '#icon-log-in'}></use>
          </svg>
        </Link>
      </div>
    </section>
  );
};
export default Functionality;
