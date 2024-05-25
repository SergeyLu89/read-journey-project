import css from './Diary.module.css';
import { formatingTime } from 'helpers/formatingTime';
import { useDispatch } from 'react-redux';
import sprite from '../../../assets/images/sprite.svg';
import { graphPng } from 'assets/images/defaultImages/defaultImages';
import { removeReadingThunk } from '../../../redux/books/readingBook/readingBookOperations';
import { getLastReadPage } from 'helpers/getLastReadPage';
import { sortByDate } from 'helpers/sortByDate';

const SprintItem = ({ sprint, totalPages, bookId }) => {
  const dispatch = useDispatch();

  const searchParams = new URLSearchParams({
    bookId,
    readingId: sprint._id,
  });

  const readPages = sprint.finishPage;
  if (!readPages) return null;

  const totalRead = sprint.finishPage - sprint.startPage;
  const totalReadPercentage = ((totalRead * 100) / totalPages).toFixed(2);

  const { minuteDifference } = formatingTime(
    sprint.startReading,
    sprint.finishReading
  );

  const speed = sprint.speed;

  return (
    <li className={css.sprintItem}>
      <div className={css.percentageBox}>
        <p className={css.totalPercentage}>{totalReadPercentage}%</p>
        <p className={css.minuteDifference}>
          {minuteDifference} {minuteDifference === 1 ? 'minute' : 'minutes'}
        </p>
      </div>
      <div className={css.graphWrapper}>
        <div className={css.graphBox}>
          <img src={graphPng} alt="grapf" className={css.graphImg} />
          <p className={css.speed}>
            {speed} {speed === 1 ? 'page' : 'pages'} per hour
          </p>
        </div>
        <button
          type="button"
          onClick={() => dispatch(removeReadingThunk(searchParams))}
          className={css.deleteBtn}
        >
          <svg className={css.deleteSvg} aria-label="trash icon">
            <use href={sprite + '#icon-trash'}></use>
          </svg>
        </button>
      </div>
    </li>
  );
};

const DiaryItem = ({ day, sprints, totalPages, bookId }) => {
  if (sprints.length === 1 && sprints[0].status === 'active') {
    return null;
  }
  console.log('sprints: ', sprints);
  const readPages = getLastReadPage(sprints, totalPages);

  return (
    <li className={css.diaryItem}>
      <div className={css.diaryWrapper}>
        <div className={css.diaryHeader}>
          <div className={css.svgWrapper}>
            <svg className={css.dairyListItemSvg} aria-label="block icon">
              <use href={sprite + '#icon-block'}></use>
            </svg>
          </div>
          <div className={css.diaryDate}>
            <p className={css.date}>{day}</p>
            <p className={css.pageRead}>
              {readPages} {readPages === 1 ? 'page' : 'pages'}
            </p>
          </div>
        </div>
        <ul className={css.sprintList}>
          {[...sprints].reverse().map(sprint => (
            <SprintItem
              key={sprint._id}
              sprint={sprint}
              totalPages={totalPages}
              bookId={bookId}
            />
          ))}
        </ul>
      </div>
    </li>
  );
};

const Diary = ({ book }) => {
  const { totalPages, progress } = book;

  const diaryList = sortByDate(progress);
  console.log('diaryList: ', diaryList);

  return (
    <section className={css.diary}>
      <h3>Diary</h3>
      <ul className={css.dairyList}>
        {diaryList.map(([key, value]) => (
          <DiaryItem
            key={key}
            day={key}
            sprints={value}
            totalPages={totalPages}
            bookId={book._id}
          />
        ))}
      </ul>
    </section>
  );
};
export default Diary;
