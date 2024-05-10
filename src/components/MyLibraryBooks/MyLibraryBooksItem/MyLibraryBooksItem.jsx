import css from './MyLibraryBooksItem';
import Modal from 'components/reUseComponents/Modal/Modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import BookInfoComponent from 'components/reUseComponents/BookInfoComponent/BookInfoComponent';
import UniversalButton from 'components/reUseComponents/UniversalButton/UniversalButton';
import { removeLibraryBooksThunk } from '../../../redux/books/libraryBooks/libraryBooksOperations';
import { defaultImageBookSmallPng } from 'assets/images/defaultImages/defaultImages';
import { useNavigate } from 'react-router-dom';

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
      <li>
        <button type="button" onClick={openModal} className={css.modalOpenBtn}>
          <img
            src={imageUrl ? imageUrl : defaultImageBookSmallPng}
            alt={title}
            className={css.bookImage}
          />
        </button>

        <h4>{title}</h4>
        <p>{author}</p>
        <button
          type="button"
          onClick={() => {
            dispatch(removeLibraryBooksThunk(_id));
          }}
        >
          Delete
        </button>
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
