import css from './Functionality.module.css';

import { Link } from 'react-router-dom';

const Functionality = () => {
  return (
    <>
      <h3>Start your workout</h3>
      <ul>
        <li>
          <div>1</div>
          <p>
            <span>Create a personal library:</span> add the books you intend to
            read to it.
          </p>
        </li>
        <li>
          <div>2</div>
          <p>
            <span>Create your first workout:</span> define a goal, choose a
            period, start training.
          </p>
        </li>
      </ul>
      <Link className={css.functionalityLink} to="/library">
        Already have an account?
      </Link>
    </>
  );
};
export default Functionality;
