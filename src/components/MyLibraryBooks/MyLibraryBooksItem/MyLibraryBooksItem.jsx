import css from './MyLibraryBooksItem.module.css';
import sprite from '../../../assets/images/sprite.svg';
import Modal from 'components/reUseComponents/Modal/Modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import BookInfoComponent from 'components/reUseComponents/BookInfoComponent/BookInfoComponent';
import UniversalButton from 'components/reUseComponents/UniversalButton/UniversalButton';
import { removeLibraryBooksThunk } from '../../../redux/books/libraryBooks/libraryBooksOperations';
import { defaultImageBookSmallPng } from 'assets/images/defaultImages/defaultImages';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { styleToastify } from 'components/Toaster/tostify';

const MyLibraryBooksItem = ({ book }) => {
  const { author, imageUrl, title, _id } = book;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleStartReading = () => {
    navigate('/reading', { state: { bookId: _id } });
  };

  return (
    <>
      <li className={css.libraryBooksItem}>
        <button type="button" onClick={openModal} className={css.modalOpenBtn}>
          <img
            src={imageUrl ? imageUrl : defaultImageBookSmallPng}
            alt={title}
            className={css.bookImage}
          />
        </button>
        <div className={css.btnWrapper}>
          <div className={css.descriptionWrapper}>
            <h4>{title}</h4>
            <p>{author}</p>
          </div>

          <button
            type="button"
            className={css.deleteBtn}
            onClick={() => {
              dispatch(removeLibraryBooksThunk(_id));
              toast.success('The book was removed', styleToastify);
            }}
          >
            <svg width="14" height="14" aria-label="trash icon">
              <use href={sprite + '#icon-trash'}></use>
            </svg>
          </button>
        </div>
      </li>
      {isOpen && (
        <Modal isOpen={isOpen} closeFnc={closeModal}>
          <BookInfoComponent book={book} />
          <UniversalButton
            title={'Start reading'}
            btnFunction={handleStartReading}
          />
        </Modal>
      )}
    </>
  );
};
export default MyLibraryBooksItem;
