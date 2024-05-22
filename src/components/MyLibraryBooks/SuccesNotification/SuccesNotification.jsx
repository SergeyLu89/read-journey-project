import css from './SuccesNotification.module.css';
import { likePng } from '../../../assets/images/defaultImages/defaultImages';

const SuccesNotification = () => {
  return (
    <div className={css.notificationWrapper}>
      <img src={likePng} alt="like" className={css.likeImage} />
      <h3>Good job</h3>
      <p className={css.notificationDescr}>
        Your book is now in{' '}
        <span className={css.notificationDescrAccent}>the library!</span> The
        joy knows no bounds and now you can start your training
      </p>
    </div>
  );
};
export default SuccesNotification;
