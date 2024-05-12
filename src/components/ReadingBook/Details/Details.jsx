import css from './Details.module.css';

import { useState } from 'react';
import Diary from '../Diary/Diary';
import Statistics from '../Statistics/Statistics';

const Details = ({ book }) => {
  const [activeChild, setActiveChild] = useState('Diary');
  // const { progress } = book;
  // console.log('progress: ', progress);
  return (
    <>
      <div className={css.navigationLinks}>
        <button
          onClick={() => setActiveChild('Diary')}
          className={`${css.navLink} ${activeChild === 'Diary' && css.active}`}
        >
          Diary
        </button>
        <button
          onClick={() => setActiveChild('Statistics')}
          className={`${css.navLink} ${
            activeChild === 'Statistics' && css.active
          }`}
        >
          Statistics
        </button>
      </div>
      {activeChild === 'Diary' && <Diary book={book} />}
      {activeChild === 'Statistics' && <Statistics />}
    </>
  );
};
export default Details;
