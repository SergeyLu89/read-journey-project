import css from './RegisterPage.module.css';

import RegisterForm from 'components/Forms/AuthForms/RegisterForm/RegisterForm';
import HeroImageComponent from 'components/HeroImageComponent/HeroImageComponent';

const RegisterPage = () => {
  return (
    <div className={css.pageWrapper}>
      <RegisterForm />
      <HeroImageComponent />
    </div>
  );
};

export default RegisterPage;
