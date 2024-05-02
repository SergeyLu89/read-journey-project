import css from './LoginForm.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logInThunk } from '../../../redux/auth/authOperations';

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
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

  const onSubmit = data => {
    console.log(data);
    dispatch(logInThunk(data));
  };

  return (
    <>
      <p>LOGO</p>
      <h1>Expand your mind, reading a book</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className={css.loginForm}
      >
        <label htmlFor="user_email">Mail:</label>
        <input
          type="email"
          name="email"
          id="user_email"
          {...register('email')}
        />
        <p>{errors.email?.message}</p>

        <label htmlFor="user_password">Password:</label>
        <input
          type="password"
          name="password"
          id="user_password"
          {...register('password')}
        />
        <p>{errors.password?.message}</p>

        <button type="submit" disabled={!isValid} className={css.formBtn}>
          Log In
        </button>
        <Link className={css.loginLink} to="/register">
          Don't have an account?
        </Link>
      </form>
    </>
  );
};
export default LoginForm;
