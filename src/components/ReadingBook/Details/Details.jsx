import css from './Details.module.css';
import sprite from '../../../assets/images/sprite.svg';
import { useState } from 'react';
import Diary from '../Diary/Diary';
import Statistics from '../Statistics/Statistics';

const Details = ({ book }) => {
  const [activeChild, setActiveChild] = useState('Diary');

  return (
    <section className={css.detailsScetion}>
      <div className={css.detailsBtnWrapper}>
        <button
          onClick={() => setActiveChild('Diary')}
          className={`${css.detailsBtn} ${
            activeChild === 'Diary' && css.active
          }`}
        >
          <svg aria-label="hourglass icon" className={css.detailsBtnSvg}>
            <use href={sprite + '#icon-hourglass'}></use>
          </svg>
        </button>
        <button
          onClick={() => setActiveChild('Statistics')}
          className={`${css.detailsBtn} ${
            activeChild === 'Statistics' && css.active
          }`}
        >
          <svg aria-label="pie icon" className={css.detailsBtnSvg}>
            <use href={sprite + '#icon-pie'}></use>
          </svg>
        </button>
      </div>
      {activeChild === 'Diary' && <Diary book={book} />}
      {activeChild === 'Statistics' && <Statistics book={book} />}
    </section>
  );
};
export default Details;
