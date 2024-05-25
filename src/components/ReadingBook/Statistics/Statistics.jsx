import css from './Statistics.module.css';
import { getLastPage } from 'helpers/getLastPage';

const Statistics = ({ book }) => {
  const { totalPages, progress } = book;

  const lastPageRead = getLastPage(progress, totalPages);

  const readingProgress = ((lastPageRead * 100) / totalPages).toFixed(2);

  return (
    <div className={css.statisticsBlok}>
      <h3>Statistics</h3>
      <p className={css.statisticsDescr}>
        Each page, each chapter is a new round of knowledge, a new step towards
        understanding. By rewriting statistics, we create our own reading
        history.
      </p>
      <div className={css.chartWrapper}>
        <div className={css.chartBox}>
          <div className={css.pie} style={{ '--p': `${readingProgress}` }}>
            100%
          </div>
        </div>
        <div className={css.pieDescriptionBox}>
          <div className={css.colorBox}></div>
          <div className={css.pieDescription}>
            <span>{readingProgress}%</span>
            <p>
              {lastPageRead} {lastPageRead !== 1 ? 'pages' : 'page'} read
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Statistics;
