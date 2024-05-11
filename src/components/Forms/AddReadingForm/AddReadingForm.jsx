import css from './AddReadingForm.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import {
  finishReadingThunk,
  startReadingThunk,
} from '../../../redux/books/readingBook/readingBookOperations';
import { useState } from 'react';

const AddReadingForm = ({ book }) => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const { _id, totalPages, progress } = book;
  const dispatch = useDispatch();

  const isBookFirstRender = progress
    .map(point => point.status)
    .some(value => value === 'active');

  const [isActive, setIsActive] = useState(isBookFirstRender);
  const isAct = isFirstRender ? isBookFirstRender : isActive;

  const schema = Yup.object({
    page: Yup.number()
      .required('Enter page number')
      .typeError('Hmm... I think this is not a number :)')
      .min(1)
      .max(`${totalPages}`),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

  const togleOnSubmit = async ({ page }) => {
    const sentData = {
      id: _id,
      page: page,
    };
    try {
      if (isAct) {
        await dispatch(finishReadingThunk(sentData));
        setIsActive(false);
      } else {
        await dispatch(startReadingThunk(sentData));
        setIsActive(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsFirstRender(false);
      reset();
    }
  };

  return (
    <>
      {isAct ? <p>Stop page:</p> : <p>Start page:</p>}

      <form
        onSubmit={handleSubmit(togleOnSubmit)}
        autoComplete="off"
        className={css.libraryForm}
      >
        <label htmlFor="page">Page number:</label>
        <input type="text" name="page" id="page" {...register('page')} />
        <p>{errors.page?.message}</p>
        <button disabled={!isValid} className={css.formBtn}>
          {isAct ? 'To stop' : 'To start'}
        </button>
      </form>
    </>
  );
};
export default AddReadingForm;
