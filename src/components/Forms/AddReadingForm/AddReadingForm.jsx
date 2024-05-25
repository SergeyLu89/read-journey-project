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
import Modal from 'components/reUseComponents/Modal/Modal';
import { booksPng } from 'assets/images/defaultImages/defaultImages';
import { toast } from 'react-toastify';
import { styleToastify } from '../../Toaster/tostify';

const AddReadingForm = ({ book }) => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const { _id, totalPages, progress } = book;
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

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
    formState: { errors, isValid, dirtyFields },
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
        toast.success('Reading finish', styleToastify);
        if (page === totalPages) {
          openModal();
        }
      } else {
        await dispatch(startReadingThunk(sentData));
        setIsActive(true);
        toast.success('Reading started', styleToastify);
      }
    } catch (error) {
      toast.error('Oops, something went wrong', styleToastify);
      console.error(error);
    } finally {
      setIsFirstRender(false);
      reset();
    }
  };

  return (
    <section className={css.readingFormSection}>
      {isAct ? (
        <p className={css.formTitile}>Stop page:</p>
      ) : (
        <p className={css.formTitile}>Start page:</p>
      )}

      <form
        onSubmit={handleSubmit(togleOnSubmit)}
        autoComplete="off"
        className={css.readingForm}
      >
        <div className={css.inputWrapper}>
          <label htmlFor="page">Page number:</label>
          <input
            type="text"
            name="page"
            id="page"
            {...register('page')}
            className={`${css.pageInput} ${errors.page && css.error} 
            ${dirtyFields.page && !errors.page && css.correct}`}
          />
          {errors?.page && (
            <p className={css.errorMessage}>{errors.page?.message}</p>
          )}
          {dirtyFields.page && !errors.page && (
            <p className={css.correctMessage}>Correct</p>
          )}
        </div>

        <button disabled={!isValid} className={css.formBtn}>
          {isAct ? 'To stop' : 'To start'}
        </button>
      </form>
      {isOpen && (
        <Modal isOpen={isOpen} closeFnc={closeModal}>
          <div className={css.bookIsReadBox}>
            <img src={booksPng} alt="books" className={css.booksImg} />
            <h3>The book is read</h3>
            <p className={css.description}>
              It was an <span>exciting journey</span>, where each page revealed
              new horizons, and the characters became inseparable friends.
            </p>
          </div>
        </Modal>
      )}
    </section>
  );
};
export default AddReadingForm;
