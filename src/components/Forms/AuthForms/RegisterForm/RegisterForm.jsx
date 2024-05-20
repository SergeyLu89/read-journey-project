import css from './RegisterForm.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { registerThunk } from '../../../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import Logo from 'components/Header/Logo/Logo';
import sprite from '../../../../assets/images/sprite.svg';
import { useState } from 'react';

const schema = Yup.object({
  name: Yup.string()
    .required('Name is a required field')
    .min(2, 'Minimum 2 symbols'),
  email: Yup.string()
    .email('Mail must be a valid email')
    .required('Mail is a required field')
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/),
  password: Yup.string()
    .required('Password is a required field')
    .min(7, 'Minimum 7 symbols'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, dirtyFields },
    reset,
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

  const onSubmit = data => {
    dispatch(registerThunk(data));
    reset();
  };

  return (
    <section className={css.registerBlok}>
      <Logo />
      <h1 className={css.mainTitle}>
        Expand your mind, reading <span>a book</span>
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className={css.registerForm}
      >
        <div className={css.inputWrapper}>
          <label htmlFor="user_name">Name:</label>
          <input
            type="text"
            name="name"
            id="user_name"
            {...register('name')}
            className={`${css.nameInput} ${errors?.name && css.error} 
            ${dirtyFields.name && !errors.name && css.correct}
              `}
          />
          {errors?.name && (
            <>
              <svg className={css.inputSvg}>
                <use href={sprite + '#icon-error'}></use>
              </svg>
              <p className={css.errorMessage}>{errors.name?.message}</p>
            </>
          )}
          {dirtyFields.name && !errors.name && (
            <>
              <svg className={css.inputSvg}>
                <use href={sprite + '#icon-check'}></use>
              </svg>
              <p className={css.correctMessage}>This is a correct name</p>
            </>
          )}
        </div>

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
            Registration
          </button>
          <Link className={css.loginLink} to="/login">
            Already have an account?
          </Link>
        </div>
      </form>
    </section>
  );
};
export default RegisterForm;
