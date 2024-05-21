import css from './UniversalButton.module.css';

const UniversalButton = ({ title, btnFunction }) => {
  return (
    <button type="button" onClick={btnFunction} className={css.universalbtn}>
      {title}
    </button>
  );
};
export default UniversalButton;
