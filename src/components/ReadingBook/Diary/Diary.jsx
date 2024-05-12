// import css from './Diary.module.css'

// import { formatingDate } from 'helpers/formatingDate';

const Diary = ({ book }) => {
  const {
    progress,
    // totalPages
  } = book;
  return (
    <>
      <ul>
        {progress.map(
          ({
            startPage,
            finishPage,
            startReading,
            finishReading,
            _id,
            speed,
            status,
          }) => (
            <li key={_id}>
              {/* <p>{formatingDate(finishReading)}</p> */}
              {/* <p>startPage: {startPage}</p>
              <p>finishPage: {finishPage}</p>
              <p>startReading: {startReading}</p>
              <p>finishReading: {finishReading}</p> */}
            </li>
          )
        )}
      </ul>
    </>
  );
};
export default Diary;
