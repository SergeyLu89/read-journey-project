// import css from './UniversalButton.module.css'

const UniversalButton = ({ title, btnFunction }) => {
  return (
    <button type="button" onClick={btnFunction}>
      {title}
    </button>
  );
};
export default UniversalButton;
