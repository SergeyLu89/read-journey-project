import css from './LoginForm.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logInThunk } from '../../../../redux/auth/authOperations';
import Logo from 'components/Header/Logo/Logo';
import sprite from '../../../../assets/images/sprite.svg';
import { useState } from 'react';

const schema = Yup.object({
  email: Yup.string()
    .email('Mail must be a valid email')
    .required('Mail is a required field')
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/),
  password: Yup.string()
    .required('Password is a required field')
    .min(7, 'Minimum 7 symbols'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, dirtyFields },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

  const onSubmit = data => {
    dispatch(logInThunk(data));
  };

  return (
    <section className={css.loginBlok}>
      <Logo />
      <h1 className={css.mainTitle}>
        Expand your mind, reading <span>a book</span>
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className={css.loginForm}
      >
        <div className={css.inputWrapper}>
          <label htmlFor="user_email">Mail:</label>
          <input
            type="email"
            name="email"
            id="user_email"
            {...register('email')}
            className={`${css.emailInput} ${errors.email && css.error} 
            ${dirtyFields.email && !errors.email && css.correct}
              `}
          />
          {errors?.email && (
            <>
              <svg className={css.inputSvg}>
                <use href={sprite + '#icon-error'}></use>
              </svg>
              <p className={css.errorMessage}>{errors.email?.message}</p>
            </>
          )}
          {dirtyFields.email && !errors.email && (
            <>
              <svg className={css.inputSvg}>
                <use href={sprite + '#icon-check'}></use>
              </svg>
              <p className={css.correctMessage}>This is a correct mail</p>
            </>
          )}
        </div>

        <div className={css.inputWrapper}>
          <label htmlFor="user_password">Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="user_password"
            {...register('password')}
            className={`${css.passwordInput} ${errors.password && css.error} 
            ${dirtyFields.password && !errors.password && css.correct}
              `}
          />
          {showPassword ? (
            <svg
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className={`${css.inputSvg} ${css.eyeSvg} ${
                errors.password && css.eyeError
              } ${dirtyFields.password && !errors.password && css.eyeCorrect}`}
            >
              <use href={sprite + '#icon-eye'}></use>
            </svg>
          ) : (
            <svg
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className={`${css.inputSvg} ${css.eyeSvg} ${
                errors.password && css.eyeError
              } ${dirtyFields.password && !errors.password && css.eyeCorrect}`}
            >
              <use href={sprite + '#icon-eye-off'}></use>
            </svg>
          )}
          {errors?.password && (
            <>
              {/* <svg className={css.inputSvg}>
                <use href={sprite + '#icon-error'}></use>
              </svg> */}
              <p className={css.errorMessage}>{errors.password?.message}</p>
            </>
          )}
          {dirtyFields.password && !errors.password && (
            <>
              {/* <svg className={css.inputSvg}>
                <use href={sprite + '#icon-check'}></use>
              </svg> */}
              <p className={css.correctMessage}>Password is secure</p>
            </>
          )}
        </div>
        <div className={css.buttonWrapper}>
          <button type="submit" disabled={!isValid} className={css.formBtn}>
            Log In
          </button>
          <Link className={css.registerLink} to="/register">
            Don't have an account?
          </Link>
        </div>
      </form>
    </section>
  );
};
export default LoginForm;
