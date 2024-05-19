import css from './LoginPage.module.css';

import LoginForm from 'components/Forms/AuthForms/LoginForm/LoginForm';
import HeroImageComponent from 'components/HeroImageComponent/HeroImageComponent';

const LoginPage = () => {
  return (
    <div className={css.pageWrapper}>
      <LoginForm />
      <HeroImageComponent />
    </div>
  );
};
export default LoginPage;
