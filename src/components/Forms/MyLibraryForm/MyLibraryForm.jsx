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
    .typeError('Hmm... I think this is not a number :)'),
});

const MyLibraryForm = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) });

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
    <div>
      <p>Create your library:</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className={css.libraryForm}
      >
        <label htmlFor="title">Book title:</label>
        <input type="text" name="title" id="title" {...register('title')} />
        <p>{errors.title?.message}</p>

        <label htmlFor="author">The author:</label>
        <input type="text" name="author" id="author" {...register('author')} />
        <p>{errors.author?.message}</p>

        <label htmlFor="pages">Number of pages:</label>
        <input
          type="text"
          name="pages"
          id="pages"
          {...register('totalPages')}
        />
        <p>{errors.totalPages?.message}</p>

        <button type="submit" disabled={!isValid} className={css.formBtn}>
          Add book
        </button>
      </form>
      {isOpen && (
        <Modal isOpen={isOpen} closeFnc={closeModal}>
          <SuccesNotification />
        </Modal>
      )}
    </div>
  );
};
export default MyLibraryForm;
