import css from './MyLibraryForm.module.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { createLibraryBooksThunk } from '../../../redux/books/libraryBooks/libraryBooksOperations';
import Modal from 'components/reUseComponents/Modal/Modal';
import SuccesNotification from 'components/MyLibraryBooks/SuccesNotification/SuccesNotification';

const schema = Yup.object({
  title: Yup.string().required('Book title is a required field'),
  author: Yup.string().required('The author is a required field'),
  totalPages: Yup.number()
    .required('Number of pages is a required field')
    .typeError('Hmm... I think this is not a number :)')
    .min(1, 'There must be more than 0 pages'),
});

const MyLibraryForm = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, dirtyFields },
    reset,
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const onSubmit = async data => {
    try {
      await dispatch(createLibraryBooksThunk(data)).unwrap();
      reset();
      openModal();
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <section className={css.libraryFormSection}>
      <p className={css.formTitile}>Create your library:</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className={css.libraryForm}
      >
        <div className={css.inputWrapper}>
          <label htmlFor="title">Book title:</label>
          <input
            type="text"
            name="title"
            id="title"
            {...register('title')}
            className={`${css.titleInput} ${errors.title && css.error} 
            ${dirtyFields.title && !errors.title && css.correct}`}
          />
          {errors?.title && (
            <p className={css.errorMessage}>{errors.title?.message}</p>
          )}
          {dirtyFields.title && !errors.title && (
            <p className={css.correctMessage}>Fitting title</p>
          )}
        </div>

        <div className={css.inputWrapper}>
          <label htmlFor="author">The author:</label>
          <input
            type="text"
            name="author"
            id="author"
            {...register('author')}
            className={`${css.authorInput} ${errors.author && css.error} 
            ${dirtyFields.author && !errors.author && css.correct}`}
          />
          {errors?.author && (
            <p className={css.errorMessage}>{errors.author?.message}</p>
          )}
          {dirtyFields.author && !errors.author && (
            <p className={css.correctMessage}>Fitting author</p>
          )}
        </div>

        <div className={css.inputWrapper}>
          <label htmlFor="pages">Number of pages:</label>
          <input
            type="text"
            name="pages"
            id="pages"
            {...register('totalPages')}
            className={`${css.pagesInput} ${errors.totalPages && css.error} 
            ${dirtyFields.totalPages && !errors.totalPages && css.correct}`}
          />
          {errors?.totalPages && (
            <p className={css.errorMessage}>{errors.totalPages?.message}</p>
          )}
          {dirtyFields.totalPages && !errors.totalPages && (
            <p className={css.correctMessage}>Almost done</p>
          )}
        </div>

        <button type="submit" disabled={!isValid} className={css.formBtn}>
          Add book
        </button>
      </form>
      {isOpen && (
        <Modal isOpen={isOpen} closeFnc={closeModal}>
          <SuccesNotification />
        </Modal>
      )}
    </section>
  );
};
export default MyLibraryForm;
