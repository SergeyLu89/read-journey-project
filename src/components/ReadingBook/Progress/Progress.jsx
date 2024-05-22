import css from './Progress.module.css';
import { starPng } from 'assets/images/defaultImages/defaultImages';
const Progress = () => {
  return (
    <section className={css.progressSection}>
      <h3>Progress</h3>
      <p>
        Here you will see when and how much you read. To record, click on the
        button above.
      </p>
      <div className={css.imageWrapper}>
        <img src={starPng} alt="star" className={css.starImage} />
      </div>
    </section>
  );
};
export default Progress;
